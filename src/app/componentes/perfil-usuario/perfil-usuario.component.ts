import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: any
  datos: any
  info: boolean = false

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    
    let user: any = localStorage.getItem('user')
    let tok = sessionStorage.getItem('token')
    let usuario = JSON.parse(user)
    if (usuario) {
      this.usuario = usuario
      let query = {
        query: `
          query {
            Usuario(id: ${usuario.identificacion}){
              identificacion
              nombre
              correo
              telefono
              fechaCreacion
            }
          }
        `
      }

      this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        this.datos = res.data.Usuario
      })
    } else {
      this.usuario = 0
      this.datos = []
    }
  }

  mostrarInfo(){
    this.info = true
  }

  ocultarInfo(){
    this.info = false
  }

}
