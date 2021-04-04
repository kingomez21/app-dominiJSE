import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-domicilio-usuario',
  templateUrl: './domicilio-usuario.component.html',
  styleUrls: ['./domicilio-usuario.component.css']
})
export class DomicilioUsuarioComponent implements OnInit {

  identificacion: number
  mostrar: boolean = false
  lista: any[]
  cantidad: number

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    let usuario = JSON.parse(user)
    if (usuario) {
      this.identificacion = usuario.identificacion
      let token = sessionStorage.getItem('token')
      let query = {
        query: `
        query {
          listaDomiCliente(id: ${this.identificacion}){
            idProducto
            ciudad
            barrio
            direccion
            fechaCreacion
          }
        }

      `
      }

      this.server.Querys(query, token).then(res => res.json())
        .then(res => {
          this.lista = res.data.listaDomiCliente
          this.cantidad = this.lista.length
        })
    } else {
      this.identificacion = 0
    }

  }

  mostrarDomicilios() {
    this.mostrar = true

  }

  ocultarDomicilios(){
    this.mostrar = false
  }

}
