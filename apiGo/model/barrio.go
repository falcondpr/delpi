package model

type Barrio struct {
	ID       int    `json:"id" gorm:"primaryKey"`
	Nombre   string `json:"nombre"`
	CiudadID int    `json:"-"`
}

func (Barrio) TableName() string {
	return "barrios"
}
