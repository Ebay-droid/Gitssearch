import { HttpService } from '../http.service';
import { Component, OnInit, } from '@angular/core';
import { Repository } from '../repository';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: Repository ;
 
  

  constructor( public repoService:HttpService) { }

  findRepo(searchUser){
    this.repoService.getRepo(searchUser).then(
      (result)=>{
        this.repos= this.repoService.repos;
      },
      (error)=>{
        console.log("Ooops!!");
      });
  }


  //  findUser(){
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
  //  findRepo(){
  //   this.httpService.updateUser(this.username);
  //   this.httpService.getRepo().subscribe(repos=>{
  //     console .log (repos)
  //     this.repos = [repos]
  //   });
  
    

  //  }
   

  ngOnInit() {
    this.findRepo ("Ebay-droid")
  }

}


