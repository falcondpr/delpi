package api

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"os"
	"time"
)

func Router() *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
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
	publicRoutes := r.Group("/api")
	publicRoutes.GET("/departamentos", DepartamentosHandler)
	publicRoutes.GET("/ciudades", CiudadesHandler)
	publicRoutes.GET("/ciudades/:departamentoID", CiudadesHandler)
	publicRoutes.GET("/barrios", BarriosHandler)
	publicRoutes.GET("/barrios/:ciudadID", BarriosHandler)

	if os.Getenv("ENV") == "development" {
		r.GET("/", HomeHandler)
		r.POST("/api/departamentos", DepartamentosHandler)
		r.POST("/api/ciudades/:departamentoID", CiudadesHandler)
		r.POST("/api/barrios/:ciudadID", BarriosHandler)
		r.GET("/create", CrearHandler)
		r.GET("/test", HomeHandler)
	}

	return r
}
