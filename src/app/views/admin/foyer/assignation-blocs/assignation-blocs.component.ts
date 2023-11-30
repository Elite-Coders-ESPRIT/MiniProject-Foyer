import { Component } from '@angular/core';
import { Bloc } from '../Model/Bloc';
import { ActivatedRoute } from '@angular/router';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-assignation-blocs',
  templateUrl: './assignation-blocs.component.html',
  styleUrls: ['./assignation-blocs.component.css']
})
export class AssignationBlocsComponent {
  blocs: Bloc[] = [{
    idBloc: 0,
    nomBloc: '', // Update the type of nomBloc to accept null
    capaciteBloc: 0
  }];

  NouvelleListeBlocs: Bloc[] = [];
  messageErreur:boolean = false;
  assignClicked = false; // Flag to track button click

  selectedBlocNames: string[] = [];
  idFoyer: number;

  SelectedBlocs: string[]=[];
  filteredOptions: string[] = []; // Array to store filtered options

  constructor(
    private route: ActivatedRoute,
    private foyerService: FoyerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFoyer = params['idFoyer'];
      this.getAllBlocs();
    });

  }

  onAssignClick() {
    this.assignClicked = true; // Set the flag to true on button click
  }

  filterOptions(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filteredOptions = this.selectedBlocNames.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllBlocs() {
    this.foyerService.getAllBlocsNull().subscribe((data: Bloc[]) => {
      this.blocs = data;
      console.log("blocs", this.blocs);
  
      if (this.selectedBlocNames.length === 0) {
        this.selectedBlocNames = this.blocs.map(bloc => bloc.nomBloc ?? '');
        console.log(this.selectedBlocNames);
  
        // Update filteredOptions here
        this.filteredOptions = this.selectedBlocNames;
      }
    });
  }
  onSelectionChange(selectedNames: any[]) {
    console.log(selectedNames);
  
    if (Array.isArray(selectedNames)) {
      this.SelectedBlocs = [...selectedNames];
  
      this.NouvelleListeBlocs = this.blocs.filter(bloc =>
        selectedNames.includes(bloc.nomBloc ?? '')
      );
      console.log("Selected Blocs: ", this.NouvelleListeBlocs);
    } else if (typeof selectedNames === 'object' && selectedNames !== null) {
      const anySelectedNames = selectedNames as any;
      if ('value' in anySelectedNames) {
        this.SelectedBlocs = [...anySelectedNames.value];
  
        this.NouvelleListeBlocs = this.blocs.filter(bloc =>
          anySelectedNames.value.includes(bloc.nomBloc ?? '')
        );
        console.log("Selected Blocs: ", this.NouvelleListeBlocs);
      } else {
        console.error('Invalid selection input:', selectedNames);
      }
    } else {
      console.error('Invalid selection input:', selectedNames);
    }
  }


  selectAllOptions() {
    // Logic to select all options
    this.SelectedBlocs = [...this.selectedBlocNames];
    this.NouvelleListeBlocs = [...this.blocs];
  }

  ResetOptions(){
      this.SelectedBlocs = [];
      this.NouvelleListeBlocs = [];
  }

  assignBlocsToFoyer() {
    if(this.SelectedBlocs.length>0){ 
  
      if (this.idFoyer && this.NouvelleListeBlocs.length > 0) {
      this.foyerService.addBlocToFoyer(this.idFoyer, this.NouvelleListeBlocs).subscribe(
        (response: string) => {
          console.log(response); // Log the response from the backend
          // Refresh or reload the page here if needed
        },
        (error: any) => {
          console.error('Error while assigning blocs to foyer:', error);
          // Handle the error here, if needed
        }
      );
    } else {
      console.error('Invalid Foyer ID or no blocs selected!');
    }
  }else{
    this.messageErreur=true;
  }
  
}
}