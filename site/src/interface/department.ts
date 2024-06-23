export interface IDepartament {
  id: number;
  nombre: string;
  gps: {
    lat: number;
    long: number;
  };
  dato: string;
}
