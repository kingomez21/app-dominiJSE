import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-registro-negocio',
  templateUrl: './registro-negocio.component.html',
  styleUrls: ['./registro-negocio.component.css']
})
export class RegistroNegocioComponent implements OnInit {

  codigoNegocio: string
  dueno: string
  identificacion: number
  correo: string
  nombreNegocio: string
  tipoNegocio: string
  contrasena: string
  compContrasena: string

  constructor(public server: ServidorService, public r: Router) { }

  ngOnInit(): void {
  }

  registro() {
    let query = {
      query: `
        mutation {
          crearNegocio(input:{
            codigoNegocio: "${this.codigoNegocio}"
            dueno: "${this.dueno}"
            identificacion: ${this.identificacion}
            correo: "${this.correo}"
            contrasena: "${this.contrasena}"
            nombre: "${this.nombreNegocio}"
            tipoNegocio: "${this.tipoNegocio}"
          }){
            codigoNegocio
            nombre
          }
        }
      `
    }
    if (this.contrasena === this.compContrasena) {
      this.server.Querys(query).then(res => res.json())
        .then(res => {
          alert(`Negocio con codigo ${res.data.crearNegocio.codigoNegocio} y nombre: ${res.data.crearNegocio.nombre} creado satisfactoriamente`)
          this.r.navigate(['/login'])
        })
    }else{
      alert("contraseña no valida")
    }


  }

}
