import { Component } from '@angular/core';
import { FoyerService } from '../../foyer/service/foyer.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalFoyers: number = 0;
  etudiant: any[] = [];
  nbChambre: any[] = [];
  ChambreByType:any[] = [];

  tableSearchText:string='';
  totalCapacity: number=0;
  totalNumberOfBlocs:number=0;

  constructor(private foyerService: FoyerService) { }

  ngOnInit(): void {
    this.calculateStatistics();
    this.getNbEtudiantSelonFoyer();
    this.getNbChambreSelonFoyer();
    this.getNbChambreFoyerByType();
  }

  calculateStatistics() {
    // Fetch foyer data from service
    this.foyerService.getAllFoyers().subscribe((foyers) => {
      this.totalFoyers = foyers.length;
  
      // Calculate total capacity for all foyers
  
      foyers.forEach((foyer) => {
        this.totalCapacity += foyer.capaciteFoyer;
      });
         // Calculate total number of blocs for all foyers
    foyers.forEach((foyer) => {
      this.totalNumberOfBlocs += foyer.blocs.length;
    });
    // Assign total number of blocs to a variable
    // (You can use this value in your component or template as needed)
    });
  }
  

  getNbEtudiantSelonFoyer() {
    this.foyerService.getNbEtudiantSelonFoyer().subscribe((data: any) => {
      this.etudiant = data;
      this.renderEtudiantBarChart();
    });
  }

  getNbChambreSelonFoyer() {
    this.foyerService.getNbChambreSelonFoyer().subscribe((data: any) => {
      this.nbChambre = data;
      this.renderChambrePieChart();
    });
  }


  getNbChambreFoyerByType(){
    this.foyerService.getNbChambreFoyerByType().subscribe((data: any) => {
      this.ChambreByType = data;
      console.log(this.ChambreByType)
      
    });
  }

  renderEtudiantBarChart() {
    const ctx = document.getElementById('barChartEtudiant') as HTMLCanvasElement;
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.etudiant.map(data => data[0]),
        datasets: [{
          label: 'Nombre d\'étudiants par foyer',
          data: this.etudiant.map(data => data[1]),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  renderChambrePieChart() {
    const ctx = document.getElementById('pieChartChambre') as HTMLCanvasElement;
    const myChambrePieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.nbChambre.map(data => data[0]),
        datasets: [{
          label: 'Nombre de chambres par foyer',
          data: this.nbChambre.map(data => data[1]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(54, 140, 110, 0.5)',
            // Add more colors as needed
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // Add more colors if needed
          ],
          borderWidth: 1
        }]
      },
      options: {
        // Additional options specific to pie charts if needed
      }
    });
  }

  


  
}