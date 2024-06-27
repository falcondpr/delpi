package model

type PostModel struct {
	Response []struct {
		Nombre string `json:"nombre"`
		Gps    struct {
			Lat  float64 `json:"lat"`
			Long float64 `json:"long"`
		} `json:"gps"`
		Fact string `json:"fact"`
	} `json:"Response"`
}
