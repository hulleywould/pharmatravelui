import { Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DrugserviceService{

  @Input() data;

  constructor(private http: HttpClient) { }

}
