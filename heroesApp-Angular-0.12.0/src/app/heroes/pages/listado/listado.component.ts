import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [` 
    mat-card{
      margin-top:20px
    }
  ` 
  ]
})
export class ListadoComponent implements OnInit {

   heroes: Heroe[]=[]

  constructor(private heroesservice: HeroesService) { }

  ngOnInit(): void {

    this.heroesservice.getHeroes()
    .subscribe( resp => {
      this.heroes=resp
    })
  }

}
