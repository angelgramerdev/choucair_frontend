import { Component } from '@angular/core';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SinginComponent 
{

  name:any;
  password:any;
  remember:boolean=false;
  response:any;


  constructor(private service:SigninService)
  {

  }

 login()
 {
  let identity=
  {
    Name:this.name,
    Password:this.password,
    Remember:this.remember
  }
  debugger
  localStorage.setItem("user", this.name);
  localStorage.setItem("password", this.password);
  this.service.login(identity).subscribe(res=> {
    this.response=res;
    console.log(this.response);
    if(this.response)
        window.location.href="/home";
    else
      alert(this.response.Message);  
  });

 }

}
