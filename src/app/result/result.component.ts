import { HttpService } from './../http.service';
import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  user: any ;
  repos: any ;
  username: any
 
  

  constructor( private httpService:HttpService) {
    
   }
   findUser(){
     this.httpService.updateUser(this.username);
    
     this.httpService.getUser().subscribe (response=>{
      console.log (response)
       this.user = response
      });
     this.httpService.getRepo().subscribe(repos=>{
       console .log (repos)
       this.repos = repos
     });
   
   }
   findRepo(){
    this.httpService.updateUser(this.username);
    this.httpService.getRepo().subscribe(repos=>{
      console .log (repos)
      this.repos = repos
    });
  
    

   }
   

  ngOnInit() {
    
  }

}


