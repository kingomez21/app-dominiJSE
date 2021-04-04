import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';
@Component({
  selector: 'app-lista-producto-usuario',
  templateUrl: './lista-producto-usuario.component.html',
  styleUrls: ['./lista-producto-usuario.component.css']
})
export class ListaProductoUsuarioComponent implements OnInit {

  productos: any[]
  mostrarP: boolean =false

  ciudad: string
  barrio: string
  direccion: string
  cant: number

  userd: any
  tot: number

  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    this.actualizar()
  }

  actualizar(){
    let user: any = localStorage.getItem('user')
    let tok = sessionStorage.getItem('token')
    let usuario = JSON.parse(user)
    
    if (usuario) {
      this.userd = usuario
      let query = {
        query: `
          query{
            listaProductosEstado(estado: true){
              id
              nombreProducto
              imagenUrl
              descripcionProducto
              precio
              precioDomicilio
              idNegocio
              fechaCreacion
            }
          }
        `
      }

      this.server.Querys(query, tok).then(res => res.json())
      .then(res => {
        this.productos = res.data.listaProductosEstado
      })
    } else {
      this.productos = []
    }
  }

  mostrarProd(){
    this.mostrarP = true
  }  

  ocultarProd(){
    this.mostrarP = false
  }

  total(precio: number, pDomicilio: number){
    
    this.tot = this.cant * (precio + pDomicilio)
    this.mostrarP = false
    this.mostrarP = true
  }

  confirmarDomicilio(idProd: number, precio: number, pDomicilio: number){
    let tok = sessionStorage.getItem('token')
    let idDomi: number
    let suma = precio + pDomicilio
    let query = {
      query: `
        mutation {
          crearDomicilio(input: {
            idProducto: ${idProd}
            idCliente: ${this.userd.identificacion}
            ciudad: "${this.ciudad}"
            barrio: "${this.barrio}"
            direccion: "${this.direccion}"
          }){
            idDomicilio
          }
        }
      `
    }

    this.server.Querys(query, tok).then(res => res.json())
    .then(res => {
      idDomi =  res.data.crearDomicilio.idDomicilio
      if(idDomi){
        let totalP = this.cant * suma
        let qy = {
          query: `
            mutation {
              crearFactura(input: {
                idDomicilio: ${idDomi}
                cantidad: ${this.cant}
                totalPagar: ${totalP}
              }){
                idFactura
                fechaCreacion
              }
            }
          `
        }

        this.server.Querys(qy, tok).then(res => res.json())
        .then(res => {
          alert(`factura creada satisfactoriamente`)
        })
      }
    })
  }

}
