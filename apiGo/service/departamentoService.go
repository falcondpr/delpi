package service

import (
	"apiGo/model"
	"gorm.io/gorm"
)

func GetAllDepartamentos(con *gorm.DB) []model.Departamento {
	var departamentos []model.Departamento
	con.Find(&departamentos)
	return departamentos
}

func AddDepartamento(departamento model.Departamento, con *gorm.DB) {
	con.Create(&departamento)
}
