import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Empresas } from '../modelos/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerEmpresas() : Observable<any> {

    return this._http.get(this.url + '/obtenerEmpresas', { headers: this.headersVariable });
  }

}
