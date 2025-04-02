import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { AuthenticationGuard } from './authentication.guard';
import { Sibling1Component } from './sibling1/sibling1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}, //default routing

  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard],
  children:[
  {path: 'welcome', component: WelcomeComponent},
  {path: 'logout', component: LogoutComponent},
  {path:'data-binding', component:DataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'vehicle', component: VehicleComponent, canActivate:[AuthenticationGuard],},
  {path: 'employee', component: EmployeeComponent},
  {path: 'create-vehicle', component: CreateVehicleComponent},
  {path: 'createuser', component: CreateuserComponent},
  {path: 'vehicledetails/:id', component: VehicledetailsComponent},
  {path: 'edit-vehicle/:id', component: CreateVehicleComponent},
  {path: 'sibling1', component: Sibling1Component},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path:'textarea', component:TextareaComponent},
  {path:'aboutceo',component:AboutCeoComponent},
  {path:'aboutcompany',component:AboutCompanyComponent},
  {path:'payments',
    loadChildren: ()=> import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {path:'lifecyclehooks', component:LifecyclehooksComponent}

  ]},
  {path: '**', component: Error404Component},  //wildcard routing
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
