import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}, //default routing

  {path: 'dashboard', component: DashboardComponent,
  children:[
  {path: 'welcome', component: WelcomeComponent},{path: 'logout', component: LogoutComponent},{path:'data-binding', component:DataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'vehicle', component: VehicleComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'create-vehicle', component: CreateVehicleComponent},
  {path: 'createuser', component: CreateuserComponent}
]},
  {path: '**', component: Error404Component},  //wildcard routing
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
