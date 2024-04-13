package api

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"os"
	"time"
)

func Router() *gin.Engine {
	r := gin.Default()
	publicRoutes := r.Group("/api")

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:5173"
		},
		MaxAge: 12 * time.Hour,
	}))

	// ::: ROUTES :::
	r.GET("/", HomeHandler)
	publicRoutes.GET("/departamentos", DepartamentosHandler)
	publicRoutes.GET("/ciudades", CiudadesHandler)

	if os.Getenv("ENV") == "development" {
		r.POST("/api/departamentos", DepartamentosHandler)
		r.POST("/api/ciudades/:departamentoID", CiudadesHandler)
		r.GET("/create", CrearHandler)
		r.GET("/test", HomeHandler)
	}

	return r
}
