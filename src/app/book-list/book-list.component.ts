import { Component, OnInit } from '@angular/core';
import { BookPageService } from "../shared/book-page.service";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
customerArray =[];
showDeletedMessage : boolean;
searchText:string = "";
  constructor(public BookPageService: BookPageService) { }

  ngOnInit() {
  	this.BookPageService.getBookPage().subscribe(
                 (list) => {
                         this.customerArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }
onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.BookPageService.deleteCustomer($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
       }
   }
   filterCondition(customer){
     return customer.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }
}
