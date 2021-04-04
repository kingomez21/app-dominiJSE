import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroNegocioComponent } from './componentes/registro-negocio/registro-negocio.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { RouterModule } from '@angular/router';

import { ServidorService } from './servicio/servidor.service';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { PanelNegocioComponent } from './componentes/panel-negocio/panel-negocio.component';
import { NavUsuarioComponent } from './componentes/nav-usuario/nav-usuario.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { DomicilioUsuarioComponent } from './componentes/domicilio-usuario/domicilio-usuario.component';
import { ListaProductoUsuarioComponent } from './componentes/lista-producto-usuario/lista-producto-usuario.component';
import { PerfilNegocioComponent } from './componentes/perfil-negocio/perfil-negocio.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListaProductoNegocioComponent } from './componentes/lista-producto-negocio/lista-producto-negocio.component';
import { ProductosInfoComponent } from './componentes/productos-info/productos-info.component';
import { DomicilioNegocioComponent } from './componentes/domicilio-negocio/domicilio-negocio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroNegocioComponent,
    RegistroUsuarioComponent,
    PanelUsuarioComponent,
    PanelNegocioComponent,
    NavUsuarioComponent,
    PerfilUsuarioComponent,
    DomicilioUsuarioComponent,
    ListaProductoUsuarioComponent,
    PerfilNegocioComponent,
    CrearProductoComponent,
    ListaProductoNegocioComponent,
    ProductosInfoComponent,
    DomicilioNegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [ServidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
