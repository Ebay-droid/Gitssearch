import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchUser : string; 
  @Output () searchEmmiter = new EventEmitter<any>();



  constructor() { }



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

  ngOnInit(): void {}
  findUser (){
    this.searchEmmiter.emit(this.searchUser)
    this.searchUser = '';
  }


}
