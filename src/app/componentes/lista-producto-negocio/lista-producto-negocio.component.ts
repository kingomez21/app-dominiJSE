import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-lista-producto-negocio',
  templateUrl: './lista-producto-negocio.component.html',
  styleUrls: ['./lista-producto-negocio.component.css']
})
export class ListaProductoNegocioComponent implements OnInit {

  cod: string
  datos: any[]

  mostrar: boolean = false
  mostrarActualizar: boolean = false
  mostrarEstado: boolean = false

  nombreProducto: string
  imagenUrl: string
  descripcion: string
  precio: number
  precioDomicilio: number
  estado: boolean

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    this.lista()
  }

  lista() {
    let user: any = localStorage.getItem('user')
    let tok = sessionStorage.getItem('token')
    let usuario = JSON.parse(user)
    this.cod = localStorage.getItem('codigo')
    setTimeout(() => {
      let user: any = localStorage.getItem('user')
      let tok = sessionStorage.getItem('token')
      let usuario = JSON.parse(user)
      this.cod = localStorage.getItem('codigo')
    }, 4000)
    if (usuario) {
      let query = {
        query: `
          query {
            listaPtoNegocio(idNegocio: "${this.cod}"){
              id
              nombreProducto
              imagenUrl
              descripcionProducto
              precio
              precioDomicilio
              idNegocio
              estado
              fechaCreacion
            }
          }
        `
      }

      this.server.Querys(query, tok).then(res => res.json())
        .then(res => {
          this.datos = res.data.listaPtoNegocio
        })

    } else {
      this.datos = []
    }
  }

  actualizarProducto(id: number, estado: boolean) {
    let tok = sessionStorage.getItem('token')
    let query = {
      query: `
        mutation {
          actualizarProducto(id: ${id}, input: {
            nombreProducto: "${this.nombreProducto}"
            imagenUrl: "${this.imagenUrl}"
            descripcionProducto: "${this.descripcion}"
            precio: ${this.precio}
            precioDomicilio: ${this.precioDomicilio}
            idNegocio: "${this.cod}"
            estado: ${estado}
          }){
            nombreProducto
          }
        }
      `
    }

    this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        alert(`Producto ${res.data.actualizarProducto.nombreProducto} actualizado exitosamente`)
      })

  }

  cambiarEstado(id: number, nombre: string, imagenUrl: string, descripcion: string, precio: number, precioDomicilio: number) {
    let tok = sessionStorage.getItem('token')
    let query = {
      query: `
        mutation {
          actualizarProducto(id: ${id}, input: {
            nombreProducto: "${nombre}"
            imagenUrl: "${imagenUrl}"
            descripcionProducto: "${descripcion}"
            precio: ${precio}
            precioDomicilio: ${precioDomicilio}
            idNegocio: "${this.cod}"
            estado: ${this.estado}
          }){
            nombreProducto
          }
        }
      `
    }

    this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        alert(`Estado del Producto ${res.data.actualizarProducto.nombreProducto} cambiado exitosamente`)
      })
  }

  eliminarProducto(id: number) {
    let tok = sessionStorage.getItem('token')
    let query = {
      query: `
        mutation{
          eliminarProducto(id: ${id})
        }
      `
    }

    this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        alert(`${res.data.eliminarProducto}`)
      })

  }

  mostrarP() {
    this.mostrar = true
    this.lista()
  }

  ocultarP() {
    this.mostrar = false
  }

  mostrarA() {
    this.mostrarActualizar = true
  }

  ocultarA() {
    this.mostrarActualizar = false
  }

  mostrarE() {
    this.mostrarEstado = true
  }

  ocultarE() {
    this.mostrarEstado = false
  }

}
