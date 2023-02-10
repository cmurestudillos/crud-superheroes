import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: []
})
export class AlertaComponent {
  @Input() mensaje!: string;

}
