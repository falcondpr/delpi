export interface IDepartament {
  data: IDataDepartment[];
  limit: number;
  elements: number;
  page: number;
  sort: string;
  total_pages: number;
}

export interface IDataDepartment {
  id: number;
  nombre: string;
  gps: {
    lat: number;
    long: number;
  };
  dato: string;
}
