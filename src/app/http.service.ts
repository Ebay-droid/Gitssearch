import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api = environment.apiKey;
  username:any;
 //repos:any
  

  constructor( private http:HttpClient) {
      this.username = 'Ebay-droid'
   }

  getRepo(){
    return this.http.get('https://api.github.com/users/' + this.username +'/repos'+ '?access_token=' + this.api);
  
  }

  getUser(){
    return this.http.get('https://api.github.com/users/' + this.username +'?access_token=' + this.api);
    //console.log('wootS')
  }

  updateUser(username:any){
     this.username= username;
  }


}
