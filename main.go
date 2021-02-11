package main

import (
	"fmt" // "format" = print
	"net/http" // HTTP Requests (GET, POST, etc)
	"io/ioutil" // input output
	"encoding/xml" // unmarshall XML structure (parser)
	"strings"
)

type SitemapIndex struct {
	Locations []string `xml:"sitemap>loc"` // greater than means it get the next location down
}

type News struct {
	Titles []string `xml:"url>news>title"` // data paths
	Keywords []string `xml:"url>news>keywords"`
	Locations []string `xml:"url>loc"`
}

type NewsMap struct {
	Keyword string // the key of the map will be the title
	Location string
}

func main(){
	var s SitemapIndex //assign variable
	var n News
	newsMap := make(map[string]NewsMap)
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml") // response
	bytes, _ := ioutil.ReadAll(resp.Body) // GET request
	xml.Unmarshal(bytes, &s) // parse data

	for _, Location := range s.Locations {
		Location = strings.TrimSpace(Location) // trim whitespace
		resp, _ := http.Get(Location) // response
		bytes, _ := ioutil.ReadAll(resp.Body) // GET request
		xml.Unmarshal(bytes, &n) // unmarshal into news struct
		
		for index := range n.Keywords{
			newsMap[n.Titles[index]] = NewsMap{n.Keywords[index], n.Locations[index]}
		}
	}
	for index, data :=  range newsMap {
		fmt.Println("\n\n\n", index) // index is the Title
		fmt.Println("\n\n", data.Keyword)
		fmt.Println("\n\n", data.Location)
	}
}
