import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  domain = 'http://localhost:8080'; 
  countriesUrl = `${this.domain}/allcountries`;
  drugsUrl = `${this.domain}/alldrugs`;

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.countriesUrl);
  }

  getAllDrugs() {
    return this.http.get(this.drugsUrl);
  }

}
