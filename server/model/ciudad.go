package model

type Ciudad struct {
	ID             int          `json:"id" gorm:"primaryKey"`
	Nombre         string       `json:"nombre"`
	DepartamentoID int          `json:"-"`
	Departamento   Departamento `json:"departamento" gorm:"foreignKey:DepartamentoID"`
}

type CiudadOnly struct {
	ID     int    `json:"id" gorm:"primaryKey"`
	Nombre string `json:"nombre"`
}

func (Ciudad) TableName() string {
	return "ciudades"
}
func (CiudadOnly) TableName() string {
	return "ciudades"
}
