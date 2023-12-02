import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoyerComponent } from './foyer/foyer.component';
import { AjouterFoyerComponent } from './ajouter-foyer/ajouter-foyer.component';
import { ModifierFoyerComponent } from './modifier-foyer/modifier-foyer.component';
import { AssignationBlocsComponent } from './assignation-blocs/assignation-blocs.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const routes: Routes = [  
{path: "", component: FoyerComponent},
{ path: 'AjouterFoyer', component: AjouterFoyerComponent },
{ path: 'ModifierFoyer/:idFoyer/:nomFoyer/:capaciteFoyer', component: ModifierFoyerComponent },
{ path: 'AssignerBlocs/:idFoyer/:capaciteFoyer/:blocsDispo', component: AssignationBlocsComponent },
{path:"Dashboard",component:DashboardComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
