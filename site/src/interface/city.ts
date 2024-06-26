export interface ICity {
  data: ICityData[];
  limit: number;
  elements: number;
  page: number;
  sort: string;
  total_pages: number;
}

export interface ICityData {
  id: number;
  nombre: string;
}
