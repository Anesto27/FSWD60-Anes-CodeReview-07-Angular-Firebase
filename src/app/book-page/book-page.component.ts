import { Component, OnInit } from '@angular/core';
import { BookPageService } from "../shared/book-page.service";

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  constructor(private BookPageService:BookPageService) { }
  submitted: boolean;
  formControls = this.BookPageService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }
onSubmit(){
   this.submitted = true;
   if(this.BookPageService.form.valid){
         if(this.BookPageService.form.get("$key").value == null )

         	this.BookPageService.insertBookPage(this.BookPageService.form.value);
         	 else 
         	 	this.BookPageService.updateCustomer(this.BookPageService.form.value);
         	 	this.showSuccessMessage =true;// we set the property to true
       		setTimeout(()=> this.showSuccessMessage=false,3000);

   	  		 this.submitted = false;
   	  		 this.BookPageService.form.reset();
      		   
                
      	   }
   }
 }


         