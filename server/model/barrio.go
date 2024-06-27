package model

type Barrio struct {
	ID       int        `json:"id" gorm:"primaryKey"`
	Nombre   string     `json:"nombre"`
	CiudadID int        `json:"-"`
	Ciudad   CiudadOnly `json:"ciudad" gorm:"foreignKey:CiudadID"`
}

type BarrioOnly struct {
	ID     int    `json:"id" gorm:"primaryKey"`
	Nombre string `json:"nombre"`
}

func (Barrio) TableName() string {
	return "barrios"
}
func (BarrioOnly) TableName() string {
	return "barrios"
}
