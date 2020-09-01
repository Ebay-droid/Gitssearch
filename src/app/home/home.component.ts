import { ResultComponent } from './../result/result.component';
import { HttpService } from './../http.service';
import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public repoService:HttpService , result:ResultComponent) { }

  ngOnInit(): void {
  }

}
