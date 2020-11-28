export interface Cliente {
  IdCliente: number;
  Nombre: string;
  Cuit: number;
  IdTipoDocumento: number;
  NumeroDocumento: number;
  FechaNacimiento: string;
  IdSexo :string;
  IdEstadoCivil: string;
  Localidad: string;
  IdProvincia: string;
  Activo: boolean;
};
export const Clientes:
Cliente[] = [];