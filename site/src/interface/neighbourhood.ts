interface Gps {
  lat: number;
  long: number;
}

interface Departamento {
  id: number;
  nombre: string;
  gps: Gps;
  dato: string;
}

interface Ciudad {
  id: number;
  nombre: string;
  gps: Gps;
  dato: string;
  departamento: Departamento;
}

export interface INeighbourhood {
  data: INeighbourhoodData[];
  limit: number;
  elements: number;
  page: number;
  sort: string;
  total_pages: number;
}

export interface INeighbourhoodData {
  id: number;
  nombre: string;
  ciudad: Ciudad;
}
