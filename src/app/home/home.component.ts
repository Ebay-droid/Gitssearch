import { ResultComponent } from './../result/result.component';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // user: any ;
  // repos: any [];
  // username: any
 

  constructor(public httpService:HttpService , result:ResultComponent) { }
  // findUser(){
  //   this.httpService.updateUser(this.username);
   
  //   this.httpService.getUser().subscribe (response=>{
  //    console.log (response)
  //     this.user = response
  //    });
  //   this.httpService.getRepo().subscribe(repos=>{
  //     console .log (repos)
  //     this.repos = [repos]
  //   });
  
  // }
  // findRepo(){
  //  this.httpService.updateUser(this.username);
  //  this.httpService.getRepo().subscribe(repos=>{
  //    console .log (repos)
  //    this.repos = [repos]
  //  });
 
   

  // }

  ngOnInit(): void {
  }

}
