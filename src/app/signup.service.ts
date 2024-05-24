import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http:HttpClient) 
  { 
    this.url="https://"+window.location.hostname+":"
    +7266+"/Account/register_user"
  }

  url:string;

  register(user:any)
  {
    return this.http.post(this.url, user)
  }

}
