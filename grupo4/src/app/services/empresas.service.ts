import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url : String = 'http://localhost:3000/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerEmpresas(): Observable<any> {

    return this._http.get(this.url + '/obtenerEmpresas', {headers: this.headersVariable });
  }

  agregarEmpresas(modeloEmpresa: Empresas): Observable<any>{

    let parametros = JSON.stringify(modeloEmpresa);

    return this._http.post(this.url + '/agregarEmpresa', parametros, {headers: this.headersVariable })
  }

}
