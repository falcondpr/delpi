package main

import (
	"apiGo/api"
	"github.com/gin-gonic/gin"
	"os"
)

func main() {
	// ::: ENV
	//err := godotenv.Load()
	//
	//if err != nil {
	//	log.Fatal("Error al cargar el .env")
	//}

	gin.SetMode(os.Getenv("GIN_MODE"))

	// ::: HTTP SERVER :::
	r := api.Router()

	err = r.Run()

	if err != nil {
		panic(err)
	}
}
