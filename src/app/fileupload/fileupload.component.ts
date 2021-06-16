import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  selectedFile: File[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event){
    this.selectedFile=<File[]>event.target.files;
  }

  onUpload(){
    const filedata=new FormData();
    for(var i=0; i<this.selectedFile.length; i++){
      filedata.append('image', this.selectedFile[i], this.selectedFile[i].name);
    }
    this.http.post('https://localhost:44323/api/Values', filedata)
    .subscribe(res=>{
      console.log(res);
    })

  }
}
