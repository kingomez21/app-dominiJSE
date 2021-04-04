import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../../servicio/servidor.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  identificacion: number
  nombre: string
  apellido: string
  correo: string
  contrasena: string
  compContrasena: string
  telefono: number

  constructor(public server: ServidorService, public r: Router) { }

  ngOnInit(): void {
  }

  registro(){
    let query = {
      query: `
        mutation {
          crearUsuario(input:{
            identificacion: ${this.identificacion}
            nombre: "${this.nombre}"
            apellido: "${this.apellido}"
            correo: "${this.correo}"
            contrasena: "${this.contrasena}"
            telefono: ${this.telefono}
          }){
            identificacion
            nombre
          }
        }
      `
    }

    if (this.contrasena === this.compContrasena) {
      this.server.Querys(query).then(res => res.json())
        .then(res => {
          alert(`Usuario con identificacion ${res.data.crearUsuario.identificacion} y nombre: ${res.data.crearUsuario.nombre} creado satisfactoriamente`)
          this.r.navigate(['/login'])
        })
    }else{
      alert("contraseña no valida")
    }
  }

}
