package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.POST("/parse", func(c *gin.Context) {
		var body Request
		if err := c.ShouldBindJSON(&body); err != nil {
			return
		}

		var output Response
		for _, departamento := range body.Respuesta.Datos {

			if departamento.Activo != "S" {
				continue
			}

			output.Response = append(output.Response, struct {
				Nombre string `json:"nombre"`
			}{
				Nombre: departamento.Nombre,
			})
		}

		c.JSON(200, output)
	})

	err := r.Run()
	if err != nil {
		return
	}
}
