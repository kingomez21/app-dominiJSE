import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-productos-info',
  templateUrl: './productos-info.component.html',
  styleUrls: ['./productos-info.component.css']
})
export class ProductosInfoComponent implements OnInit {

  productos: any[]
  domicilios: any[]
  facturas: any[]
  cod: string

  mostrar: boolean = false
  mostrarDomi: boolean = false
  mostrarFactura: boolean = false

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
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
          this.productos = res.data.listaPtoNegocio

        })

    } else {
      this.productos = []
      this.domicilios = []
      this.facturas = []
    }
  }

  listaDomiPto(id: number) {
    let tok = sessionStorage.getItem('token')
    let query = {
      query: `
        query {
          listaDomiProducto(id: ${id}){
            idDomicilio
            idCliente
            ciudad
            barrio
            direccion
            fechaCreacion
          }
        }
      `
    }
    this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        this.domicilios = res.data.listaDomiProducto
        this.mostrarD()
      })

  }

  listaFactura(id: number) {
    let tok = sessionStorage.getItem('token')
    let query = {
      query: `
        query {
          listaFacturaDomicilio(id: ${id}){
            cantidad
            totalPagar
            fechaCreacion
          }
        }
      `
    }

    this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        this.facturas = res.data.listaFacturaDomicilio
        this.mostrarF()
      })
  }

  mostrarL() {
    this.mostrar = true
  }

  ocultarL() {
    this.mostrar = false
  }

  mostrarD() {
    this.mostrarDomi = true
  }

  ocultarD() {
    this.mostrarDomi = false
  }

  mostrarF() {
    this.mostrarFactura = true
  }

  ocultarF() {
    this.mostrarFactura = false
  }

}
