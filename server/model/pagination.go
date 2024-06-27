package model

type Pagination struct {
	Limit      int         `json:"limit,omitempty;query:limit"`
	Page       int         `json:"page,omitempty;query:page"`
	Sort       string      `json:"sort,omitempty;query:sort"`
	TotalRows  int64       `json:"elements"`
	TotalPages int         `json:"total_pages"`
	Data       interface{} `json:"data"`
}
