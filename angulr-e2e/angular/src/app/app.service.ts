import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class AppService {

  constructor(public http:Http) { }

  AddBook(myObj:any){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers:headers });
        let body=JSON.stringify(myObj);
        console.log("In service ...........",myObj);
        console.log("In service: Body...........",body);

    return this.http.post("http://localhost:3000/insert-data", body,options)
        .map((res) => res.json()).subscribe(
        data => {
           return true;
       },
       error => {
       // console.error("Error in saving");
         return Observable.throw(error);
       }
    ); 

}

updateBook(myObj:any) {
        console.log(myObj);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers:headers });
        
       let body=JSON.stringify(myObj);
        
        console.log("In service ...........",myObj)
        
        return this.http.post("http://localhost:3000/updateData/"+myObj.id, body ,options)
        .map((res) => res.json()).subscribe(
        data => {
           return true;
       },
       error => {
       // console.error("Error in saving");
         return Observable.throw(error);
       }
    ); 

}

 getBook(){
   return this.http.get("http://localhost:3000/getData")
   .map((res:Response)=> res.json());
 }

 deleteBook(myObj:any) {
        
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers:headers });
        
        let body=JSON.stringify(myObj);
        
        console.log("In service ...........",myObj)
        
        return this.http.post("http://localhost:3000/deleteData/"+myObj.id, body,options)
        .map((res) => res.json()).subscribe(
        data => {
           return true;
       },
       error => {
       // console.error("Error in saving");
         return Observable.throw(error);
       }
    ); 

}


 }
