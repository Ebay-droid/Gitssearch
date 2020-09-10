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
  // username:any;
  repos:Repository
  user :User
  

  constructor( private http:HttpClient) {
    //  this.username = 'Ebay-droid';
    this.user = new User ("", "", "","",0,0,0,"","")
    this.repos = new Repository ("","",0,"")

   }

   getUser(  searchUser : string){
     interface Api{
       username: string 
       login: string
       avatar : string
       url:string  
       followers: number
       repositories: number
       following: number
       bio:string
       email: string
     }
     return new Promise ((resolve,reject)=>{
       this.http
       .get<Api>('https://api.github.com/users/'+ searchUser + '?access_token='+ environment.apiKey)
       .toPromise().then((result)=>{this.user=result;
        console.log(this.user);
      })
     })
   }

  // getRepo(){
  //   return this.http.get<Repository>('https://api.github.com/users/'
  //    + this.username +'/repos'+ '?access_token=' + this.api);
  
  // }

  // getUser(){
  //   return this.http.get<User>('https://api.github.com/users/' 
  //   + this.username +'?access_token=' + this.api);
  // }

  // updateUser(username:any){
  //    this.username= username;
  // }


}
