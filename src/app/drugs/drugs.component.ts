import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DrugserviceService } from './drugservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit, OnChanges {

  @Input() data;
  results: any = [];
  lastResult: string = "";
  domain = 'http://localhost:8080'
  prodDomain = 'https://salty-tor-20615.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.data == undefined || this.data == null) {
      return;
    }
    this.getResults();
    console.log(this.data.name);
  }

  getResults() {
    this.httpClient.get(`${this.prodDomain}/result/${this.data.name}/${this.data.country}`, {
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      this.results = response.body;
      this.lastResult = this.results[this.results.length - 1];
      console.log(this.results);
    })
    .catch(console.log);
  }

}
