package model

type Ciudad struct {
	ID             int          `json:"id" gorm:"primaryKey"`
	Nombre         string       `json:"nombre"`
	Gps            GPS          `json:"gps" gorm:"embedded"`
	Dato           string       `json:"dato"`
	DepartamentoID int          `json:"-"`
	Departamento   Departamento `json:"departamento" gorm:"foreignKey:DepartamentoID"`
}

func (Ciudad) TableName() string {
	return "ciudades"
}
