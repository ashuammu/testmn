import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export class myexampleData {
  id: string;
  title : string;
  author : string;
}

@Component({
  selector: 'app-homr',
  templateUrl: './homr.component.html',
  styleUrls: ['./homr.component.css']
})
export class HomrComponent implements OnInit {

  mydata : any;
 

  constructor(private mydataservice : GetDataService,
              private frmbul: FormBuilder )
   { }
   myform1:FormGroup;
  ngOnInit() {
    this.getApi();
    this.myform1=this.frmbul.group({
      // userid : new FormControl(),
      id: new FormControl(),
      title: new FormControl(),
      author : new FormControl()
    })
  }
  getApi(){
    
    this.mydataservice.getDatacall().subscribe(
      (resp)=>
      {
        this.mydata = resp;
       // console.log(JSON.stringify( this.mydata));
      }
    )
  }
  savedata(fm){
    //this.recData = fm;
    console.log(fm);
    this.mydataservice.postDatacall(fm).subscribe(res=>{
      this.mydata=res;
      this.getApi();
    })
  }
  edit(data){
    console.log(data);
   this.myform1.patchValue({
    'id':data.id,
    'title':data.title,
    'author':data.author
   })

  }
}