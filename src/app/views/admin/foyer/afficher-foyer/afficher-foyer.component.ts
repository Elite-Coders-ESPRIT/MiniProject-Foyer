import { Component, Inject, Input, OnInit } from '@angular/core';
import { Foyer } from '../Model/Foyer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-afficher-foyer',
  templateUrl: './afficher-foyer.component.html',
  styleUrls: ['./afficher-foyer.component.css']
})
export class AfficherFoyerComponent implements OnInit {
@Input() foyer?:Foyer;
 constructor(private dialogRef: MatDialogRef<AfficherFoyerComponent>,@Inject(MAT_DIALOG_DATA) public data: {foyer: Foyer}
 ){
   this.foyer=this.data.foyer;
 }
  ngOnInit(): void {
console.log("foyers ::::",this.foyer); 
 }
 closeDialog(): void {
  this.dialogRef.close();
}
}
