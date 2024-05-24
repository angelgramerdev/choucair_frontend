import { Component } from '@angular/core';
import { TaskService} from '../task.service';
import { SigninService } from '../signin.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent 
{

  title:any;
  description:any;
  dueDate:any;
  response:any;
  user:any
  password:any;
  token:any;
  subjectTask:Subject<any>;

  constructor(private service:TaskService, 
    private serviceLogin:SigninService)
  {
    this.subjectTask=this.service.subjectService;
  }

  login()
  {
    let data=
    {
      Name:localStorage.getItem("user"),
      Password:localStorage.getItem("password")
    }

    this.serviceLogin.login(data).subscribe(res=> {
      this.token=JSON.parse(JSON.stringify(res));
      
      localStorage.setItem("token", this.token.token)
    });
  }
  
  create()
  {
    debugger
    //this.login();
    this.subjectTask.subscribe((data)=> 
      //localStorage.setItem("token", data)
    this.createTask()
  );
    debugger
    this.service.getToken();
    //this.createTask();
  }

  createTask()
  {
    let task=
    {
      Title:this.title,
      Description:this.description,
      DueDate: new Date(this.dueDate)
    }
    this.service.create(task).subscribe(res => {
      debugger
      this.response=res;
      if(this.response.code==200)
          alert("the task was saved");
      else
        if(this.response.code==405)
            alert(this.response.message)
            window.location.href='';
    });
  }

}
