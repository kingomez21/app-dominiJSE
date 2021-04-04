import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PanelNegocioComponent } from './componentes/panel-negocio/panel-negocio.component';
import { PanelUsuarioComponent } from './componentes/panel-usuario/panel-usuario.component';
import { RegistroNegocioComponent } from './componentes/registro-negocio/registro-negocio.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro-negocio',
    component: RegistroNegocioComponent
  },
  {
    path: 'registro-usuario',
    component: RegistroUsuarioComponent
  },
  {
    path: 'panel-usuario',
    component: PanelUsuarioComponent
  },
  {
    path: 'panel-negocio',
    component: PanelNegocioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
