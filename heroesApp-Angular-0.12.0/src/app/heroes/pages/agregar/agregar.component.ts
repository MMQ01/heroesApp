import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfimarComponent } from '../../components/confimar/confimar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 220%;
    border-radius:10px
  }
  `
  ]
})
export class AgregarComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: ''
  }

  publishers = [
    {
      id: 'DC Comics',
      dsc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      dsc: 'Marvel-Comics'
    }
  ]
  constructor(private heroeService: HeroesService,
    private activateRouted: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {




    this.activateRouted.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe)

  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroeService.actualizarheroe(this.heroe)
        .subscribe(heroe => {
          this.mostrarSnakbar('Registro Actualizado')
        });

    } else {
      this.heroeService.agregarheroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
          this.mostrarSnakbar('Registro Creado')

        })
    }


  }


  borrar() {
    const dialog = this.dialog.open(ConfimarComponent, {
      width: '250px',
      data: this.heroe
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroeService.borrarheroe(this.heroe.id!)
            .subscribe(reps => {
              this.router.navigate(['/heroes'])
            })
        }
      }
    )


  }

  mostrarSnakbar(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    })
  }
}
