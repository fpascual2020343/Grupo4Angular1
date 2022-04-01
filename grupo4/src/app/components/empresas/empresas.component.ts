import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService]
})
export class EmpresasComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;

  constructor(private _empresasService: EmpresasService) {
    this.empresasModelPost = new Empresas(
      '',
      '',
      '',
      '',
      [{
        nombre: '',
        direccion: ''
        }]
    )
  }

  ngOnInit(): void {
  }

  getEmpresa() {
    this._empresasService.obtenerEmpresas().subscribe(
      (response) => {
        console.log(response)
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

  postEmpresa(){
    this._empresasService.agregarEmpresas(this.empresasModelPost).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.empresasModelPost.nombre = "";
        this.empresasModelPost.direccion = "";
        this.empresasModelPost.descripcion = "";
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

}
