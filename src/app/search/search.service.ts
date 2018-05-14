import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  domain = 'http://localhost:8080';
  prodDomain = 'https://salty-tor-20615.herokuapp.com';
  countriesUrl = `${this.prodDomain}/allcountries`;
  drugsUrl = `${this.prodDomain}/alldrugs`;

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.countriesUrl);
  }

  getAllDrugs() {
    return this.http.get(this.drugsUrl);
  }

}
