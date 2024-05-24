import { Component } from '@angular/core';
import { SingupService } from '../signup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SingupComponent 
{

  name:any;
  password:any;
  response:any

  constructor(private service:SingupService)
  {

  }

  register()
  {
    debugger
    let user=
    {
      Name:this.name,
      Password:this.password
    }

    this.service.register(user).subscribe(res => {
      this.response=res;
    });

  }

}
