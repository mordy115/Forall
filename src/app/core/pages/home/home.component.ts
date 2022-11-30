import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  arry;
  constructor(private callAPI:TestService) {
   this.arry = this.callAPI.arry
  }

  ngOnInit(): void {
    this.callAPI.getALLdate();
    // this.callAPI.getdate().subscribe(
    //   (response)=>{
    //    console.log(response) ;
    //   },
    //   (error)=>{
    //   console.log(error);
    //   }
    //  )
  }

}
