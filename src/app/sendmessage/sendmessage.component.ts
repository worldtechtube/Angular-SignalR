import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  senddata(){
    var data={
      Type: 'warning',
      Information: 'text information message'
    }
    this.http.get("http://localhost:50793/api/Message").subscribe(
      data=>{
        console.log(data);
      }
    );
  }

}
