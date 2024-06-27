package core

import (
	"apiGo/model"
	"gorm.io/gorm"
	"log"
)

func CreateDB(con *gorm.DB) {

	err := con.AutoMigrate(&model.Departamento{}, &model.Ciudad{}, &model.Barrio{})
	if err != nil {
		log.Fatalf("Fallo en la migración: %v", err)
	}
}
