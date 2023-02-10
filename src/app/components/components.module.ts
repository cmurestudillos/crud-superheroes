import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import { MaterialModule } from '../modules/material.module';
// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Rutas
import { AppRoutingModule } from '../routes/app-routing.module';
// Animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Componentes
import { SearchInputComponent } from './search-input/search-input.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [
      SearchInputComponent,
      SpinnerComponent,
      AlertaComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    SearchInputComponent,
    SpinnerComponent,
    AlertaComponent
  ]
})
export class ComponentsModule { }
