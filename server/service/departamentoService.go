package service

import (
	"apiGo/model"
	"gorm.io/gorm"
)

func GetAllDepartamentos(con *gorm.DB, limit int, page int, sort string) (model.Pagination, error) {
	var departamentos []model.Departamento
	var totalRows int64

	// Contar el total de filas
	if err := con.Model(&model.Departamento{}).Count(&totalRows).Error; err != nil {
		return model.Pagination{}, err
	}

	// Calcular el offset
	offset := (page - 1) * limit

	// Obtener los departamentos con paginación y orden
	if err := con.Order(sort).Limit(limit).Offset(offset).Find(&departamentos).Error; err != nil {
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
		Data:       departamentos,
	}

	return pagination, nil
}

func AddDepartamento(departamento model.Departamento, con *gorm.DB) {
	con.Create(&departamento)
}
