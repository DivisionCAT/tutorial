package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("Hello World"))
	})

	http.HandleFunc("/test", func(w http.ResponseWriter, req *http.Request) {
		w.Write([]byte("TEST!"))
	})
	http.ListenAndServe(":5000", nil)
	fmt.Println("Running in 5000 Ports")
}
