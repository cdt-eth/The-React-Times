package main

import (
	"encoding/xml"  // unmarshall XML structure (parser)
	"fmt"           // "format" = print
	"html/template" // html templating
	"io/ioutil"     // input output
	"net/http"      // HTTP Requests (GET, POST, etc)
	"strings"       // string package
)

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
	News  string
}

func newsAggHandler(w http.ResponseWriter, r *http.Request) {
	p := NewsAggPage{Title: "Golang News Aggregator", News: "news news news"}
	t, _ := template.ParseFiles("basictemplating.html")
	t.Execute(w, p)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>First page!</h1>")
}

func main() {

	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/agg/", newsAggHandler)
	http.ListenAndServe(":8000", nil)

	var s SitemapIndex //assign variable
	var n News
	newsMap := make(map[string]NewsMap)
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml") // response
	bytes, _ := ioutil.ReadAll(resp.Body)                                         // GET request
	xml.Unmarshal(bytes, &s)                                                      // parse data

	for _, Location := range s.Locations {
		Location = strings.TrimSpace(Location) // trim whitespace
		resp, _ := http.Get(Location)          // response
		bytes, _ := ioutil.ReadAll(resp.Body)  // GET request
		xml.Unmarshal(bytes, &n)               // unmarshal into news struct

		for index := range n.Keywords {
			newsMap[n.Titles[index]] = NewsMap{n.Keywords[index], n.Locations[index]}
		}
	}
	for index, data := range newsMap {
		fmt.Println("\n\n\n", index) // index is the Title
		fmt.Println("\n\n", data.Keyword)
		fmt.Println("\n\n", data.Location)
	}
}
