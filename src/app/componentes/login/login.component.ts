import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string
  contrasena: string

  constructor(public server: ServidorService, public r : Router) { }

  ngOnInit(): void {
  }

  loginUsuario() {
    let query = {
      query: `
          mutation {
            loginUsuario(input:{
              correo: "${this.correo}"
              contrasena: "${this.contrasena}"
            })
          }

        `
    }

    this.server.Querys(query)
      .then(res => res.json()).then(res => {
        let q = {
          query: `
          query{
            enLogin{
              identificacion
              nombre
              correo
              }
          }
        `
        }
        if (res.data.loginUsuario) {
          let tok = res.data.loginUsuario
          this.server.Querys(q, res.data.loginUsuario).then(res => res.json())
            .then(res => {
              if (res.data.enLogin) {
                sessionStorage.setItem('token', tok)
                localStorage.setItem('user', JSON.stringify(res.data.enLogin))
                return this.r.navigate(['/panel-usuario'])
              }
            })
        }

      })

  }

  loginNegocio() {
    let query = {
      query: `
        mutation {
          loginNegocio(input:{
            correo: "${this.correo}"
            contrasena: "${this.contrasena}"
          })
        }

      `
    }

    this.server.Querys(query)
      .then(res => res.json()).then(res => {
        let q = {
          query: `
          query{
            enLogin{
              identificacion
              nombre
              correo
            }
        }
      `
        }
        if (res.data.loginNegocio) {
          let tok = res.data.loginNegocio
          this.server.Querys(q, res.data.loginNegocio).then(res => res.json())
            .then(res => {
              if (res.data.enLogin) {
                sessionStorage.setItem('token', tok)
                localStorage.setItem('user', JSON.stringify(res.data.enLogin))
                return this.r.navigate(['/panel-negocio'])
              }
            })
        }

      })
  }

}
