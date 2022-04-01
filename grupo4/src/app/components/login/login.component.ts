import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  IniciarSesion="Iniciar Sesion";
  Registrarme="Registrarme";
  nombreUsuario="nombre de usuario"
  Contrasena="Contraseña";
  Recordarme="Recordarme";
  ContraOlvid="¿Has olvidado tu contraseña?";
  mail="correo";
  mienbroAct="¿Ya eres miembro?";

  constructor() { }

  ngOnInit(): void {
  }

}
