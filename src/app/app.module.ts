import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomrComponent } from './homr/homr.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MytableComponent } from './mytable/mytable.component';
import { LoginComponent } from './login/login.component';
import { LoginauthService } from './loginauth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoappComponent } from './todolist/todoapp/todoapp.component';
import { EditformComponent } from './todolist/editform/editform.component';

var myroutes : Routes = [
  {path:"", component:LoginComponent, pathMatch:"full" },
    {path:"login", component:LoginComponent },
    {path: "dashboard", component: DashboardComponent, canActivate:[LoginauthService],}
  
];
var myroutes2 = RouterModule.forRoot(myroutes);


@NgModule({
  declarations: [
    AppComponent,
    HomrComponent,
    MytableComponent,
    LoginComponent,
    DashboardComponent,
    TodoappComponent,
    EditformComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    myroutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
