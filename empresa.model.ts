export class Empresas {

  constructor(
    public _id: String,
    public nombre: String,
    public direccion: String,
    public descripcion: String,
    public rol: String,
    public sucursales: [{
      nombre: String,
      direccion: String
    }]
  ){}
}
