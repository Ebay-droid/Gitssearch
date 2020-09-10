import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User ;
  repos: Repository ;
 

  constructor(public httpService:HttpService, public repoService :HttpService) { }

    find(searchUser){
      this.httpService.getUser(searchUser).then(
        (success)=>{
          this.user=this.httpService.user;
        },
        (error)=>{
          console.log ("Ooops");
        });

      this.repoService.getRepo(searchUser).then(
        (result)=>{
          this.repos=this.repoService.repos;
        },
        (error)=>{
          console.log("Ooops..Sorry");
        });  
    }



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
    this.find("Ebay-droid");
  }

}
