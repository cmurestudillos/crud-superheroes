import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
// Operadores y observables
import { Subscription } from 'rxjs';
// Modelo de datos
import { HeroeInterface } from 'src/app/interfaces/heroe.interface';
// Servicios
import { HeroesService } from 'src/app/pages/services/heroes.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SearchService } from 'src/app/services/search.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
// Otras librerias
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: HeroeInterface[] = [];
  cargando = false;
  year = new Date().getFullYear();
  displayedColumns: string[] = ['nombre', 'poder', 'estado', 'opciones'];
  dataSource!: HeroeInterface[];
  private subscriptions: Subscription[] = [];

  constructor(
    private heroesService: HeroesService,
    private searchService: SearchService,
    private notificationService: NotificationService,
    private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.getListData();
  }

  // Carga de datos
  getListData(){
    this.cargando = true;
    this.subscriptions.push(
      this.heroesService.getHeroes().subscribe(resp => {
        this.heroes = resp
        this.dataSource = resp
        this.cargando = false;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptionService.clearSubscriptions();
  }

  inputSearch(search: string): void{
    const newArray = this.searchService.searchHeroe(search, this.heroes);
    this.dataSource = newArray;
  }

  borrarHeroe(heroe: HeroeInterface, ind: number){
    Swal.fire({
      title:'¿Esta seguro de querer eliminar el registro?',
      text: `Va a borrar a ${ heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value){
        this.heroesService.borrarHeroe(heroe.id).subscribe(() => {
          this.heroes.splice(ind, 1);
          this.getListData();
          this.notificationService.showSuccessMessage('Registro eliminado con exito.');
        },
        (error: HttpErrorResponse) => {
          const mensaje = error.error.toString();
          this.notificationService.showErrorMessage(mensaje);
        })
      }
    });
  }

}
