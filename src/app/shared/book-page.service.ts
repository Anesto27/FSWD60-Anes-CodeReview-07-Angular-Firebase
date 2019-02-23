import { Injectable } from '@angular/core';
import { FormControl , FormGroup,Validators  } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class BookPageService {

  constructor(public firebase: AngularFireDatabase) { }
    bookList: AngularFireList<any>;

  form = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     lastName: new FormControl('', Validators.required),
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
         });
     getBookPage(){
                 this.bookList = this.firebase.list('customers');
                 return this.bookList.snapshotChanges();
         }
         insertBookPage(customer){
                 this.bookList.push({
                         firstName: customer.firstName,
                         lastName: customer.firstName,
                         mobile: customer.mobile,
            
                  });
         }
         populateForm(customer){
    this.form.setValue(customer);
  }
  updateCustomer(customer){
    this.bookList.update(customer.$key,{
       firstName: customer.firstName,
        lastName: customer.lastName,
        mobile: customer.mobile,
        
    });
  }
  deleteCustomer($key: string){
    this.bookList.remove($key);
  }
}