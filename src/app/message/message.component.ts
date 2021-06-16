import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private _hubConnection: HubConnection;
  showimage: boolean=false;
  signaldata: any[]=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder().withUrl('http://localhost:50793/notify').build();
    this._hubConnection.start()
    .then(()=>
    console.log('connection start'))
    .catch(err=>{
      console.log('Error while establishing the connection')
    });

    this._hubConnection.on('BroadcastMessage', (message)=>{
      this.signaldata.push(message);
      this.showimage=true;
    })

  }

  showMessage(){
    this.showimage=false;
  }

}
