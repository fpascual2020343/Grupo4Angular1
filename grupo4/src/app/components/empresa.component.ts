import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/modelos/empresa.model';
import { EmpresasService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresasService]
})
export class EmpresaComponent implements OnInit {

  public empresasModelGet: Empresas;


  constructor(private _empresasService: EmpresasService) {

   }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas() {
    this._empresasService.obtenerEmpresas().subscribe(
      (response) => {this.empresasModelGet =  response.empresas;   console.log(response);},
      (err) => {console.log(err);}
    )
  }
}
