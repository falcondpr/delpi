package service

import (
	"apiGo/model"
	"gorm.io/gorm"
)

func GetAllCiudades(con *gorm.DB, limit int, page int, sort string) (model.Pagination, error) {
	var ciudades []model.Ciudad
	var totalRows int64

	// Contar el total de filas
	if err := con.Model(&model.Ciudad{}).Count(&totalRows).Error; err != nil {
		return model.Pagination{}, err
	}

	// Calcular el offset
	offset := (page - 1) * limit

	// Obtener las ciudades con paginación y orden
	if err := con.Preload("Departamento").Order(sort).Limit(limit).Offset(offset).Find(&ciudades).Error; err != nil {
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
		Data:       ciudades,
	}

	return pagination, nil
}

func GetCiudadByDeparamentoId(con *gorm.DB, id int) []model.CiudadOnly {
	var ciudades []model.CiudadOnly
	con.Where("departamento_id =?", id).Preload("Deparamento").Find(&ciudades)
	return ciudades
}

func AddCiudad(ciudad model.Ciudad, con *gorm.DB) {
	con.Create(&ciudad)
}
