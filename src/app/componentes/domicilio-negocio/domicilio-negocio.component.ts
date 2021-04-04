import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-domicilio-negocio',
  templateUrl: './domicilio-negocio.component.html',
  styleUrls: ['./domicilio-negocio.component.css']
})
export class DomicilioNegocioComponent implements OnInit {

  produtos: any[]
  pedidos: any[]
  cod: string
  usuario: any
  tok: string
  constructor(public server: ServidorService) {
    this.datos()
  }

  ngOnInit(): void {
    this.cod = localStorage.getItem('codigo')
    let user: any = localStorage.getItem('user')
    this.tok = sessionStorage.getItem('token')
    this.usuario = JSON.parse(user)
    setTimeout(() => {
      this.cod = localStorage.getItem('codigo')
      let user: any = localStorage.getItem('user')
      this.tok = sessionStorage.getItem('token')
      this.usuario = JSON.parse(user)
    }, 4000)
  }

  datos() {
    let cont: number = 0

    if (this.usuario) {
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

      this.server.Querys(query, this.tok).then(res => res.json())
        .then(res => {
          this.produtos = res.data.listaPtoNegocio
          if (cont >= this.produtos.length) {
            console.log('no llegan pedidos')
          }
          if (this.produtos) {
            let q = {
              query: `
             query {
              listaDomiProducto(id: ${this.produtos[cont].id}){
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
            this.server.Querys(q, this.tok).then(res => res.json())
              .then(res => {
                this.pedidos = res.data.listaDomiProducto
                cont++
              })

          }
        })

    }



    setTimeout(() => {
      this.datos()
    }, 3000)
  }

}
