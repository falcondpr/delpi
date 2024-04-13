package service

import (
	"apiGo/model"
	"gorm.io/gorm"
)

func GetAllCiudades(con *gorm.DB) []model.Ciudad {
	var ciudades []model.Ciudad
	con.Preload("Departamento").Find(&ciudades)
	return ciudades
}

func AddCiudad(ciudad model.Ciudad, con *gorm.DB) {
	con.Create(&ciudad)
}
