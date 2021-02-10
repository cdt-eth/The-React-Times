package main


import (
	"fmt"
	"net/http"
)

// w = writer & writer puts info on page
// ResponseWriter is a custom type
func indexHandler(w http.ResponseWriter, r *http.Request) { // & = memory address, *is the request
	// using our writer, it will write the string
	fmt.Fprintf(w, "Ran! That's pretty cool.")
}

func aboutHandler(w http.ResponseWriter, r *http.Request) { // & = memory address, *is the request
	// using our writer, it will write the string
	fmt.Fprintf(w, "A second page! What a thought!")
}

func main(){
	http.HandleFunc("/", indexHandler) // takes in path (homepage) "/", and our handler
	http.HandleFunc("/about", aboutHandler) // takes in path (homepage) "/", and our handler
	http.ListenAndServe(":8000", nil) 	// first arg is port, second is nil for now (for server)


}