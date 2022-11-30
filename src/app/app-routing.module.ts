import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ProvidersComponent } from './core/pages/providers/providers.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'providers/:id' ,component:ProvidersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
