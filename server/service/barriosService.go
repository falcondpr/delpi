package service

import (
	"apiGo/model"
	"gorm.io/gorm"
)

func GetAllBarrios(con *gorm.DB, limit int, page int, sort string) (model.Pagination, error) {
	var barrios []model.Barrio
	var totalRows int64

	// Contar el total de filas
	if err := con.Model(&model.Barrio{}).Count(&totalRows).Error; err != nil {
		return model.Pagination{}, err
	}

	// Calcular el offset
	offset := (page - 1) * limit

	// Obtener los barrios con paginación y orden
	if err := con.Preload("Ciudad").Order(sort).Limit(limit).Offset(offset).Find(&barrios).Error; err != nil {
		return model.Pagination{}, err
	}

	// Calcular el total de páginas
	totalPages := int((totalRows + int64(limit) - 1) / int64(limit))

	// Crear el objeto de paginación
	pagination := model.Pagination{
		Limit:      limit,
		Page:       page,
		Sort:       sort,
		TotalRows:  totalRows,
		TotalPages: totalPages,
		Data:       barrios,
	}

	return pagination, nil
}

func GetBarrioByCiudadId(con *gorm.DB, id int) []model.BarrioOnly {
	var barrios []model.BarrioOnly
	con.Where("ciudad_id =?", id).Preload("Ciudad").Find(&barrios)
	return barrios
}

func AddBarrio(con *gorm.DB, barrio model.Barrio) {
	con.Create(&barrio)
}
