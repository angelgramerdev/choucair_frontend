import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './singin/signin.component';
import { SingupComponent } from './singup/signup.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component'; 

const routes: Routes = [
  {path:'', component:SinginComponent},
  {path:'signup', component:SingupComponent},
  {path:'home', component:HomeComponent},
  {path:'task', component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
