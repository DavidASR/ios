import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './v/login/login.component';
import { DashComponent } from './v/dash/dash.component';
import { NuevoComponent } from './v/nuevo/nuevo.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dash', component:DashComponent},
  {path:'nuevo', component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashComponent,NuevoComponent]