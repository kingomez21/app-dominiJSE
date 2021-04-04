import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  mostrar: boolean =false
  cod: string

  nombreProducto: string
  imagenUrl: string
  descripcion: string
  precio: number
  precioDomicilio: number
  tk: string
  constructor(public server: ServidorService) { }

  ngOnInit(): void {
    this.cod = localStorage.getItem('codigo')
    this.tk = sessionStorage.getItem('token')
    setTimeout(() => {
      this.cod = localStorage.getItem('codigo')
      this.tk = sessionStorage.getItem('token')
    }, 4000)
    
  }

  registrarProducto(){
    let query = {
      query: `
        mutation {
          crearProducto(input: {
            nombreProducto: "${this.nombreProducto}"
            imagenUrl: "${this.imagenUrl}"
            descripcionProducto: "${this.descripcion}"
            precio: ${this.precio}
            precioDomicilio: ${this.precioDomicilio}
            idNegocio: "${this.cod}"
            estado: true
          }){
            nombreProducto
          }
        }

      `
    }

    this.server.Querys(query, this.tk).then(res => res.json())
    .then(res =>{
      alert(`El producto ${res.data.crearProducto.nombreProducto} creado satisfactoriamente`)
    })

  }

  mostrarF(){
    this.mostrar = true
  }

  ocultarF(){
    this.mostrar = false
  }

}
