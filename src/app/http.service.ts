import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api = environment.apiKey;
  username:any;
  repos:Repository
  user :User
  

  constructor( private http:HttpClient) {
     this.username = 'Ebay-droid';
     
      
      


   }

  getRepo(){
    return this.http.get<Repository>('https://api.github.com/users/'
     + this.username +'/repos'+ '?access_token=' + this.api);
  
  }

  getUser(){
    return this.http.get<User>('https://api.github.com/users/' 
    + this.username +'?access_token=' + this.api);
  }

  updateUser(username:any){
     this.username= username;
  }


}
