import { NgModule } from '@angular/core';
// Rutas
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { HeroesComponent } from '../pages/heroes/heroes.component';
import { HeroeComponent } from '../pages/heroe/heroe.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', redirectTo: '/heroes' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
