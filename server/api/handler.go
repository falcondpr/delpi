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
		// Obtener parámetros de paginación de la consulta
		limit, _ := strconv.Atoi(c.DefaultQuery("limit", "20"))
		page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
		sort := c.DefaultQuery("sort", "id asc")

		pagination, err := service.GetAllDepartamentos(db, limit, page, sort)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, pagination)
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
		// Obtener parámetros de paginación de la consulta
		limit, _ := strconv.Atoi(c.DefaultQuery("limit", "20"))
		page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
		sort := c.DefaultQuery("sort", "id asc")

		departamentoID := c.Param("departamentoID")

		if departamentoID != "" {
			departamento, err := strconv.Atoi(departamentoID)

			if err != nil {
				c.JSON(http.StatusBadRequest, gin.H{
					"error": "Invalid Department ID",
				})
				return
			}

			ciudades := service.GetCiudadByDeparamentoId(db, departamento)
			c.JSON(http.StatusOK, ciudades)

			return
		}

		// ::: Todas las Ciudades :::
		pagination, err := service.GetAllCiudades(db, limit, page, sort)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, pagination)

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

func BarriosHandler(c *gin.Context) {
	switch c.Request.Method {
	case "GET":
		// Obtener parámetros de paginación de la consulta
		limit, _ := strconv.Atoi(c.DefaultQuery("limit", "20"))
		page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
		sort := c.DefaultQuery("sort", "id asc")

		ciudadID := c.Param("ciudadID")

		if ciudadID != "" {
			ciudad, err := strconv.Atoi(ciudadID)

			if err != nil {
				c.JSON(http.StatusBadRequest, gin.H{
					"error": "Invalid City ID",
				})
				return
			}

			barrios := service.GetBarrioByCiudadId(db, ciudad)
			c.JSON(http.StatusOK, barrios)

			return
		}

		// ::: Todos los Barrios :::
		pagination, err := service.GetAllBarrios(db, limit, page, sort)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, pagination)

	case "POST":
		ciudadIDStr := c.Param("ciudadID")
		ciudadID, err := strconv.Atoi(ciudadIDStr)

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid city ID",
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
			barrio := model.Barrio{
				Nombre:   body.Nombre,
				CiudadID: ciudadID,
			}
			service.AddBarrio(db, barrio)
		}
	}
}

func CrearHandler(c *gin.Context) {
	core.CreateDB(db)

	c.JSON(http.StatusOK, gin.H{
		"message": "Creado",
	})
}
