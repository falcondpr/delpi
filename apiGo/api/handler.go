package api

import (
	"apiGo/core"
	"apiGo/model"
	"apiGo/service"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

var db = core.ConnectToDb()

func HomeHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Hi",
	})
}

func DepartamentosHandler(c *gin.Context) {

	switch c.Request.Method {
	case "GET":
		departamentos := service.GetAllDepartamentos(db)
		c.JSON(http.StatusOK, departamentos)
	case "POST":
		var requestBody model.PostModel

		if err := c.BindJSON(&requestBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		for _, body := range requestBody.Response {
			departamento := model.Departamento{
				Nombre: body.Nombre,
				Gps:    body.Gps,
				Dato:   body.Fact,
			}
			service.AddDepartamento(departamento, db)
		}

		c.JSON(http.StatusOK, gin.H{"message": "Departamentos agregados con exito"})

	default:
		c.JSON(http.StatusMethodNotAllowed, gin.H{
			"error": "Método no permitido",
		})
	}
}

func CiudadesHandler(c *gin.Context) {
	switch c.Request.Method {
	case "GET":
		ciudades := service.GetAllCiudades(db)
		c.JSON(http.StatusOK, ciudades)

	case "POST":
		departamentoIDStr := c.Param("departamentoID")
		departamentoID, err := strconv.Atoi(departamentoIDStr)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid department ID",
			})
			return
		}

		var requestBody model.PostModel

		if err := c.BindJSON(&requestBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
			return
		}

		for _, body := range requestBody.Response {
			ciudad := model.Ciudad{
				Nombre:         body.Nombre,
				Gps:            body.Gps,
				Dato:           body.Fact,
				DepartamentoID: departamentoID,
			}
			service.AddCiudad(ciudad, db)
		}

		c.JSON(http.StatusOK, gin.H{"message": "Ciudades agregados con exito"})

	default:
		c.JSON(http.StatusMethodNotAllowed, gin.H{
			"error": "Método no permitido",
		})
	}
}

func CrearHandler(c *gin.Context) {
	core.CreateDB(db)

	c.JSON(http.StatusOK, gin.H{
		"message": "Creado",
	})
}
