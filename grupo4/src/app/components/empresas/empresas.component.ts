import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresa.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService, UsuarioService]
})
export class EmpresasComponent implements OnInit {

  public empresasModelGet: Empresas;
  public empresasModelPost: Empresas;
  public token;

  constructor(private _empresasService: EmpresasService,
                    private _usuarioService: UsuarioService) {
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
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa() {
    this._empresasService.obtenerEmpresas().subscribe(
      (response) => {
        console.log(response.empresa);
        this.empresasModelGet = response.empresa;
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

  deleteEmpresa(id) {
    this._empresasService.eliminarEmpresa(id).subscribe(
      response => {console.log(response);
        this.getEmpresa();
      },
      (err) => {console.log(<any>err);
      }
    )
  }

}
