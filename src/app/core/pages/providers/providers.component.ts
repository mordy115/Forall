import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  id:any;
  item:any;
  constructor(private route:ActivatedRoute,private callAPI:TestService) {
    this.item = this.callAPI.arry

    console.log(this.item);
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms)=>{
      this.id =parms.get('id')
    });
    this.item =this.callAPI.arry.filter(el=>el.id===Number(this.id))


  }

}
