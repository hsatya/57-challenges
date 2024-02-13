package main

import "fmt";

func main() {
	var username string;
	fmt.Print("What is your name? ");
	fmt.Scan(&username);
	message := "Hello, " + username + ", nice to meet you!"; 
	fmt.Println(message);
	// fmt.Printf("Hello, %s, nice to meet you!\n", username);
}