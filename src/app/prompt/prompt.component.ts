import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../_services/dialog.service';
import { ModalService } from '../_services/modal.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  @ViewChild('field_required') field_required: ElementRef; 
  subscription: Subscription;
  constructor(private modalService: ModalService, private dialogService: DialogService) {
    this.subscription = this.dialogService.getDialog().subscribe(d=>{
      if(d==1){
        this.modalService.open(this.field_required).then(d=>{
          console.log(d);
        })
      }
    });
   }

  ngOnInit(): void {
  }

}
