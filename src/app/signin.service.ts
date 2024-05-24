import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url:string;

  constructor(private http:HttpClient) 
  { 
    this.url="http://"+window.location.hostname+":"
    +5205+"/api/Account/login_user"
  }

  login(identity:any)
  {
    return this.http.post(this.url, identity);
  }

}
