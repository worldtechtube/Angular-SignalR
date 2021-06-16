import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Subscription } from 'rxjs';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private _hubConnection: HubConnection;
  msgs: Message[] = [];

  public loggedInData: string;
  dataPassed: any;
  subscription: Subscription;
  
  constructor(private ds: DataService){
    this.subscription = this.ds.getData().subscribe(x => {
      this.loggedInData = x; 
    });
  }

  ngOnInit():void{
    // this._hubConnection = new HubConnectionBuilder().withUrl('http://localhost:50793/notify').build();
    // this._hubConnection.start()
    // .then(()=> console.log('Connection Started'))
    // .catch(err=>{console.log('Error while establishing connection')});

    // this._hubConnection.on('BroadcastMessage', (type: string, payload: string)=>{
    //   console.log(type, ' ', payload);
    //   //this.msgs.push({severity: type, summary: payload});
    // })
  }
  

  logout(){
    this.loggedInData=undefined;
    sessionStorage.removeItem('user');
  }
}