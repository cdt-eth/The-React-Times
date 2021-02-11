package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main(){
	
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml") // response
	// resp, _ := http.Get("https://christiandavidphoto.com/sitemap_index.xml") // response
	bytes, _ := ioutil.ReadAll(resp.Body) // GET request
	stringBody := string(bytes) // convert datat to string
	fmt.Println(stringBody) // print stringified data
	resp.Body.Close() // closer response
}



// // w = writer & writer puts info on page
// // ResponseWriter is a custom type
// func indexHandler(w http.ResponseWriter, r *http.Request) { // & = memory address, *is the request
// 	// using our writer, it will write the string
// 	fmt.Fprintf(w, `<h1>Home Page</h1>
// 					<p>This is...</p>
// 					<p>...wild</p>`)
// }

// func aboutHandler(w http.ResponseWriter, r *http.Request) { // & = memory address, *is the request
// 	// using our writer, it will write the string
// 	fmt.Fprintf(w, "A second page! What a thought!")
// }

// func main(){
// 	http.HandleFunc("/", indexHandler) // takes in path (homepage) "/", and our handler
// 	http.HandleFunc("/about", aboutHandler) // takes in path (homepage) "/", and our handler
// 	http.ListenAndServe(":8000", nil) 	// first arg is port, second is nil for now (for server)
// }