import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styles: [` 
    mat-card{
      margin-top:20px
    }
  ` 
  ]
})
export class HeroetarjetaComponent implements OnInit {
  @Input() heroe!: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
