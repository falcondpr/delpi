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
  id: number;
  nombre: string;
  ciudad: Ciudad;
}
