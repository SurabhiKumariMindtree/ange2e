import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';

  constructor(public appService:AppService){
     }
    title:String;
    title1:string;
    publisher:String;
    publisher1:String;
    author:String;
    author1:String;
    category:String;
    category1:String;
   book:any[];
   id:String;
  
addBook(myObj){
  
var myObj:any={
  
      "title":this.title,
      "author":this.author,
      "publisher":this.publisher,
      "category":this.category

  }
  console.log("This is component data :",myObj);
  this.appService.AddBook(myObj)
}

updateBook(myObj){
  console.log("IN Update------------------component------------------");
  console.log(myObj);
  var myObj:any={
  
      "title":this.title1,
      "author":this.author1,
      "publisher":this.publisher1,
      "category":this.category1,
     "id":this.id
}


console.log(myObj);
  console.log("This is component data :",myObj);
  this.appService.updateBook(myObj);

}

 getBook(myObj){


    this.appService.getBook().subscribe(
      data =>{ 
        this.book=data
        console.log("Hiiiiiiiiiiiii",this.book);});


 }

 deleteBook(myObj){
   this.appService.deleteBook(myObj);
 }

}
