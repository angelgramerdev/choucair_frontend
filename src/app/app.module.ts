import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SinginComponent } from './singin/signin.component';
import { SingupComponent } from './singup/signup.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { DatepickerConfigComponent } from './datepicker-config/datepicker-config.component';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    SingupComponent,
    HomeComponent,
    TaskComponent,
    DatepickerConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
