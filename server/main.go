package main

import (
	"apiGo/api"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found. Continuing without it.")
	}

	// Set Gin mode based on environment variable, default to "release" mode if not set
	ginMode := os.Getenv("GIN_MODE")
	if ginMode == "" {
		ginMode = "release"
	}
	gin.SetMode(ginMode)

	// Create a new Gin router
	r := api.Router()

	// Get the port from environment variables, default to 8080 if not set
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Run the Gin server on the specified port
	err = r.Run(":" + port)
	if err != nil {
		log.Fatal("Failed to run server: ", err)
	}
}
