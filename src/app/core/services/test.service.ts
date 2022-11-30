import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseURL:string ="https://forall.sa/services/api/ads/companies?page_count=5&type_id=2";
  //https://6325d6404cd1a2834c457d24.mockapi.io/user
  constructor(private http:HttpClient ) {}
   getdate():Observable<any>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*'
    });
    let options = {
      headers: headers
    }
    return this.http.get(this.baseURL ,options)
   }
   getALLdate(){
    fetch('https://forall.sa/services/api/ads/companies?page_count=5&type_id=2')
  .then((response) => response.json())
  .then((data) => console.log(data));
   }
   arry=[
    {
      id:1,
      name:"amazon",
      img:"../../../../assets/image/amazon1.png",
      overview:"overview 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime.",
      features:" features 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime."
    },
    {
      id:2,
      name:"aramex",
      img:"../../../../assets/image/aramex.png",
      overview:"overview 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime.",
      features:" features 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime."
    },
    {
      id:3,
      name:"HITACHI",
      img:"../../../../assets/image/hitachi.png",
      overview:"overview 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime.",
      features:" features 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem, eveniet totam quisquam hic velit maxime aperiam blanditiis atque amet fugiat iste veniam nulla. Amet architecto inventore repudiandae accusantium maxime."
    },
  ]


}
