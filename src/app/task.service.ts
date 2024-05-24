import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string;
  url_login:string;
  headers:HttpHeaders;
  token:any;
  subjectService:Subject<any>;
  
  
  constructor(private http:HttpClient) 
  { 
    this.url="http://"+window.location.hostname+":"
    +5205+"/api/Task/create_task"
    this.url_login="http://"+window.location.hostname+":"
    +5205+"/api/Account/login_user"
    this.headers=new HttpHeaders();
    this.subjectService=new Subject();
    
  }

  create(task:any)
  {
    // WARNING: For POST requests, body is set to null by browsers
    //this.getToken();
    debugger
    this.token=localStorage.getItem("token");
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization","Bearer "+ this.token);

    // WARNING: For POST requests, body is set to null by browsers.

    
    return this.http.post(this.url,JSON.stringify(task),{ headers: this.headers });
  }

  getToken()
  {
    
    let identity=
    {
      Name:localStorage.getItem("user"),
      Password:localStorage.getItem("password")
    }
    this.http.post(this.url_login, identity).subscribe(res=>{
      debugger
      this.token=JSON.parse(JSON.stringify(res));
      localStorage.setItem("token",this.token.token);
      this.subjectService.next(this.token.token);
    });
  }

}
