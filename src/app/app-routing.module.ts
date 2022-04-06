import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './Componentes/pages/home/home.component';
import { ItemComponent } from './Componentes/pages/item/item.component';
import { AboutComponent } from './Componentes/pages/about/about.component';
import { BusquedaComponent } from './Componentes/pages/busqueda/busqueda.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'about', component: AboutComponent},
  {path:'item/:cod', component: ItemComponent},
  {path:'buscar/:textoBusq', component: BusquedaComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
