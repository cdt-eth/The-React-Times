package main

import (
	"encoding/xml"  // unmarshall XML structure (parser)
	"fmt"           // "format" = print
	"html/template" // html templating
	"io/ioutil"     // input output
	"net/http"      // HTTP Requests (GET, POST, etc)
	"strings"       // string package
	"sync"          // concurrency
)

var wg sync.WaitGroup

// SitemapIndex ...
// greater than means it get the next location down
type SitemapIndex struct {
	Locations []string `xml:"sitemap>loc"`
}

// News ...
// xml:"..." = data paths
type News struct {
	Titles    []string `xml:"url>news>title"`
	Keywords  []string `xml:"url>news>keywords"`
	Locations []string `xml:"url>loc"`
}

// NewsMap ...
// Keyword = the key of the map will be the title
type NewsMap struct {
	Keyword  string
	Location string
}

// NewsAggPage ...
type NewsAggPage struct {
	Title string
	News  map[string]NewsMap
}

func newsRoutine(c chan News, Location string) {
	defer wg.Done()
	var n News
	Location = strings.TrimSpace(Location) // trim whitespace
	resp, _ := http.Get(Location)          // response
	bytes, _ := ioutil.ReadAll(resp.Body)  // GET request
	xml.Unmarshal(bytes, &n)               // unmarshal into news struct
	resp.Body.Close()                      // close to prevent resource leak
	c <- n                                 // put the  values on the channel inside the goroutine
}

func newsAggHandler(w http.ResponseWriter, r *http.Request) {
	var s SitemapIndex                                                            //assign variable
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml") // response
	bytes, _ := ioutil.ReadAll(resp.Body)                                         // GET request
	xml.Unmarshal(bytes, &s)                                                      // parse data
	newsMap := make(map[string]NewsMap)
	resp.Body.Close() // close to prevent resource leak
	queue := make(chan News, 30)

	for _, Location := range s.Locations {
		wg.Add(1)                       // as we iterate we need add 1 to wg to make room
		go newsRoutine(queue, Location) // pass `queue` as the channel tothe goroutine
	}

	wg.Wait()
	close(queue) // close the queue

	for e := range queue { // iterate over channel, e is the News type - i.e. "element"
		for index := range e.Keywords {
			newsMap[e.Titles[index]] = NewsMap{e.Keywords[index], e.Locations[index]}
		}
	}

	p := NewsAggPage{Title: "Golang News Aggregator", News: newsMap}
	t, _ := template.ParseFiles("newsaggtemplate.html")
	t.Execute(w, p)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>First page!</h1>")
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/agg/", newsAggHandler)
	http.ListenAndServe(":8000", nil)
}
