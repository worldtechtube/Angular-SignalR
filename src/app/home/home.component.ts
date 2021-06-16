import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  name: any;
  namedata: any;
  ngOnInit():void{
  }
  changedata()
  {
    this.namedata=this.name;
    console.log(this.namedata);
  }
}
