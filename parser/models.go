package main

type Request struct {
	Respuesta struct {
		Datos []struct {
			Activo      string `json:"activo"`
			IDCiudad    int    `json:"idCiudad"`
			Nombre      string `json:"nombre"`
			Observacion any    `json:"observacion"`
		} `json:"datos"`
	} `json:"respuesta"`
}

type Response struct {
	Response []struct {
		Nombre string `json:"nombre"`
	}
}
