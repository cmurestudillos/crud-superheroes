import { Component, OnInit } from '@angular/core';
// Operadores y Observables
import { Observable } from 'rxjs';
// Rutas
import { ActivatedRoute, Router } from '@angular/router';
// Trabajo con formularios
import { NgForm } from '@angular/forms';
// Modelo de Datos
import { HeroeInterface } from 'src/app/interfaces/heroe.interface';
// Servicios
import { HeroesService } from 'src/app/pages/services/heroes.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: HeroeInterface = {id:'', nombre: '', poder:'', estado: false};

  constructor(
    private heroesService: HeroesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    // Obtenemos el ID de la url para luego llamar a nuestro servicio
    const id = this._route.snapshot.paramMap.get('id');

    if(id !== 'nuevo' && id !== null){
      this.heroesService.getHeroeById(id).subscribe((resp: any) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  // Metodo para guardar el heroe
  guardar(form: NgForm){
    let peticion: Observable<any>;
    let mensaje: string = '';

    // Mover los campos del formulario al modelo
    this.heroe.nombre = form.value.nombre;
    this.heroe.poder = form.value.poder;

    if (this.heroe.id !== ''){
      peticion = this.heroesService.actualizarHeroe(this.heroe);
      mensaje = 'Heroe actualizado correctamente';
    }else{
      peticion = this.heroesService.crearHeroe(this.heroe);
      mensaje = 'Heroe creado correctamente';
    }

    // cuando la peticion se resuelva, volvemos al listado mostrando mensaje
    peticion.subscribe(() => {
      this.notificationService.showSuccessMessage(mensaje);
      this._router.navigate(['/heroes']);
    });
  }

}
