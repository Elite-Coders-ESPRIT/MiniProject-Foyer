import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:"", component:FrontLayoutComponent, children:[
       {path:"", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},
       {path:"login", loadChildren:()=>import("./views/front/login-user/login-user.module").then(m=>m.LoginUserModule)},
  
  ]},
  {path:"admin",component: AdminLayoutComponent, children: [
       {path:"dashboard", loadChildren:()=>import ("./views/admin/dashboard/dashboard.module").then(m=>m.DashboardModule)},    
       {path:"login", loadChildren:()=>import ("./views/admin/login-admin/login-admin.module").then(m=>m.LoginAdminModule)},
       {path:"universite", loadChildren:()=>import ("./views/admin/universite/universite.module").then(m=>m.UniversiteModule)},
       {path:"foyer",loadChildren:()=>import ("./views/admin/foyer/foyer.module").then(m=>m.FoyerModule)}
       
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
