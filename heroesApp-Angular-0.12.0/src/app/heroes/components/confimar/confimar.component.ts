import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-confimar',
  templateUrl: './confimar.component.html',
  styleUrls: ['./confimar.component.css']
})
export class ConfimarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfimarComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Heroe) { 
    
  }

  ngOnInit(): void {
  }
  borrar(){
    this.dialogRef.close(true)
  }
  cerrar(){
    this.dialogRef.close()
  }
}
