import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../routes/app-routing.module';
// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Material
import { MaterialModule } from '../modules/material.module';
// Componentes
import { ComponentsModule } from '../components/components.module';
// Pantallas
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: []
})
export class PagesModule { }
