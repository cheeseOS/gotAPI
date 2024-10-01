import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent  implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];
  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
    .get('https://api.gameofthronesquotes.xyz/v1/random')
    .subscribe((data: any)=>{
      console.log(data);
      this.data = data;
    })
  }

}
