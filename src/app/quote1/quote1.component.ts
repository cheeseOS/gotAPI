import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote1',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.scss'],
  standalone: true,
})
export class Quote1Component  implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];
  data2: any[] = [];
  
  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
    .get('https://api.gameofthronesquotes.xyz/v1/random')
    .subscribe((data: any)=>{
      console.log(data);
      this.data = data.sentence;
      this.data2 = data.character.name;
  })
  }

}
