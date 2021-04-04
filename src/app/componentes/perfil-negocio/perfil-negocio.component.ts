import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-perfil-negocio',
  templateUrl: './perfil-negocio.component.html',
  styleUrls: ['./perfil-negocio.component.css']
})
export class PerfilNegocioComponent implements OnInit {

  datos: any
  mostrar: boolean = false
  u: any

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    let tok = sessionStorage.getItem('token')
    let usuario = JSON.parse(user)
    this.u = usuario
    if(usuario){
      let query = {
        query: `
          query {
            Negocio(id: ${usuario.identificacion}, nombre: "${usuario.nombre}"){
              codigoNegocio
              identificacion
              dueno
              correo
              nombre
              tipoNegocio
              fechaCreacion
            }
          }
        `
      }

      this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        this.datos = res.data.Negocio
        localStorage.setItem('codigo', this.datos.codigoNegocio)
      })
    }
  }

  mostrarInfo(){
    this.mostrar = true
  }

  ocultarInfo(){
    this.mostrar = false
  }

}
