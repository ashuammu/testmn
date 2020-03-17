import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {



  myAPI: string = "http://jsonplaceholder.typicode.com/posts";
  localAPI = "http://localhost:3000/posts";
  constructor(private serv: HttpClient)
   { }

  getDatacall(){
    return this.serv.get(this.localAPI);
  }
  // postDatacall()
  postDatacall(formdata){
    return this.serv.post(this.localAPI,formdata);
  }
}
