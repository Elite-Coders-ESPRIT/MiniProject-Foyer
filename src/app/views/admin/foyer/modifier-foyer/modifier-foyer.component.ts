import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from '../Model/Foyer';
import { FoyerService } from '../service/foyer.service';
import { Universite } from '../Model/Universite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-foyer',
  templateUrl: './modifier-foyer.component.html',
  styleUrls: ['./modifier-foyer.component.css']
})
export class ModifierFoyerComponent implements OnInit {
 
value:String='Annuler'

selectedUniversite: Universite = null;
   
Foyers: Foyer ={
    idFoyer:0,
    nomFoyer:'',
    capaciteFoyer:0,
    universite : this.selectedUniversite,
    blocs: null
   };
   universites: Universite[] = [];
   UniversiteNull : boolean=false;
    // Declare selectedUniversite property
    InvalideMessage:boolean = false;

  constructor(private route: ActivatedRoute, private foyerService: FoyerService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Foyers.idFoyer = params['idFoyer'];
      this.Foyers.nomFoyer = params['nomFoyer'];
      this.Foyers.capaciteFoyer = params['capaciteFoyer'];
    });
     
      // Now you can use this.receivedFoyer as your object
   


    // Récupération des données de l'université depuis le localStorage
const universiteData = localStorage.getItem('universite');

// Vérification si des données existent sous la clé 'universite'
if (universiteData) {
  // Conversion des données JSON en objet JavaScript
  const universiteStorage = JSON.parse(universiteData);
  this.selectedUniversite = universiteStorage; // Assign the retrieved universite to Foyers.universite
  // Utilisation des données de l'université récupérées
  console.log("Data true",this.Foyers.universite);
} else {
  console.log('Aucune donnée d\'université trouvée dans le localStorage.');
}
this.getAllUniversites();
console.log(this.Foyers.universite)
  }

  getAllUniversites() {
    this.foyerService.getAllUniversite().subscribe((data: Universite[]) => {
      this.universites = data;
      console.log("jdid",this.universites);
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

  ModifierFoyer() {
    if (this.formIsValid()) {
console.log("test foyer",this.Foyers.universite==null)

 if(this.Foyers.universite==null){
  this.Foyers.universite = this.selectedUniversite;
 }

    if ( JSON.stringify(this.Foyers.universite) == '"Par defaut"') {
      this.Foyers.universite = null;
    }
    if ( JSON.stringify(this.Foyers.universite) == '"Annuler"') {
      this.Foyers.universite = null;
    }
    
    this.foyerService.ModifierFoyer(this.Foyers).subscribe(
      (res: Foyer) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Foyer Modifier avec succées',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['admin/foyer']);
        localStorage.clear();
        console.log('Foyer modifié avec succès:', res);
        // Handle success, update UI, or show a success message to the user
      },
      (error) => {
        console.error('Erreur lors de la modification du foyer :', error);
        // Handle error, show an error message to the user
      }
    );

    console.log(this.UniversiteNull)
    
  
} else {
  this.InvalideMessage=true;
  console.log("Form is invalid. Cannot submit.");
}
}
}