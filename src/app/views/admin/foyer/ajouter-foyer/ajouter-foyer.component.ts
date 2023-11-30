  import { Component,OnInit } from '@angular/core';
  import { FoyerService } from '../service/foyer.service';
  import { Foyer } from '../Model/Foyer';
  import { Universite } from '../Model/Universite';
import { Bloc } from '../Model/Bloc';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


  @Component({
    selector: 'app-ajouter-foyer',
    templateUrl: './ajouter-foyer.component.html',
    styleUrls: ['./ajouter-foyer.component.css']
    
  })
  export class AjouterFoyerComponent implements OnInit   {
[x: string]: any;



InvalideMessage:boolean = false;

    selectedUniversite: Universite = null; // Declare selectedUniversite property

    Universites: Universite[] = [];

    Foyers: Foyer ={
      idFoyer:0,
      nomFoyer:'',
      capaciteFoyer:0,
      universite : this.selectedUniversite,
      blocs: []   
     };

    constructor(private ServiceFoyer:FoyerService,  private router: Router){}

  

    ngOnInit(): void {
      this.getAllUniversites();
        // this.nomF = localStorage.getItem("chouaib");
        // const caapFF = localStorage.getItem("10");
        // console.log(caapFF);
        // const intValue = this.stringToInt(caapFF);
        // console.log(intValue); 
        // this.caapF=intValue;

  }

  //  stringToInt(value: string): number | null {
  //   const parsedValue = parseInt(value, 10);
  //   if (!isNaN(parsedValue)) {
  //     return parsedValue;
  //   }
  //   return null; // Return null for invalid input strings
  // }
  

    getAllUniversites() {
      this.ServiceFoyer.getAllUniversite().subscribe((data: Universite[]) => {
        this.Universites = data;
        console.log(this.Universites);
      });
    }

    formIsValid(): boolean {
      return (
        this.Foyers.nomFoyer &&
        /^[A-Za-z]+$/.test(this.Foyers.nomFoyer) &&
        this.Foyers.nomFoyer.length <= 20 &&
        this.Foyers.capaciteFoyer >= 1 &&
        this.Foyers.capaciteFoyer <= 10
      );
    }


    ajouterFoyer() {
      if (this.formIsValid()) {
        this.Foyers.universite = this.selectedUniversite;
        this.ServiceFoyer.AjouterFoyer(this.Foyers).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Foyer ajouter avec succées',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['admin/foyer']);
          },
          (error: HttpErrorResponse) => {
            console.error('Error adding foyer:', error);
          }
        );
      } else {
        this.InvalideMessage = true;
        console.log('Form is invalid. Cannot submit.');
      }
    }
  
    

    
  }
