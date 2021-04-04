import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrls: ['./nav-usuario.component.css']
})
export class NavUsuarioComponent implements OnInit {

  nombre: string

  constructor(public r: Router) { }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    let usuario = JSON.parse(user)
    if(usuario){
      this.nombre = usuario.nombre
    }else{
      this.r.navigate(['/login'])
    }
    
  }

  cerrarSesion(){
    localStorage.clear()
    sessionStorage.clear()
    this.r.navigate(['/login'])
  }

}
