import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular Material
import { MaterialModule } from './modules/material.module';
//Rutas
import { AppRoutingModule } from './routes/app-routing.module';
// Manejo de formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Peticiones HTTP con BBDD
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { AppComponent } from './app.component';
// Modulos
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
