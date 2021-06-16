import { Injectable } from '@angular/core';  
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ModalService {  
    closeResult = '';  
  
    constructor(private modalService: NgbModal){}  
  
    open(content) {  
        return this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})  
        .result.then((result) => {  
        return this.closeResult = `Closed with: ${result}`;  
      }, (reason) => {  
        return this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
      });  
    }  
    
    private getDismissReason(reason: any): string {  
      if (reason === ModalDismissReasons.ESC) {  
        return 'by pressing ESC';  
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
        return 'by clicking on a backdrop';  
      } else {  
        return `with: ${reason}`;  
      }  
    }  
} 