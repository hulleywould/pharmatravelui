import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from './search.service';

export class DrugInfo {
    constructor(public name: string, public country: string, public ingredient: string){}
}


@Component({
  selector: 'app-search-dialog',
  templateUrl: './searchdialog.component.html',
  styleUrls: ['./searchdialog.component.css']
})
export class SearchDialogComponent implements OnInit {
 
    drugCtrl: FormControl;
    countryCtrl: FormControl;
    filteredData: Observable<any[]>;
    filteredCountry: Observable<any[]>;

    selectedData: { name: "", country: ""};
    isEnabled: boolean = false;

    drugInfo: DrugInfo[] = [];
    drugs = [];
    countries = [];

    constructor(
        public dialogRef: MatDialogRef<SearchDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private searchService: SearchService
    )
    {
            
            this.drugCtrl = new FormControl();
            this.countryCtrl = new FormControl();
            this.filteredData = this.drugCtrl.valueChanges
                .pipe(
                    startWith(''),
                    map(drug => drug ? this.filterDrugs(drug) : this.drugs.slice())
                );
            this.filteredCountry = this.countryCtrl.valueChanges
                .pipe(
                    startWith(''),
                    map(cntry => cntry ? this.filterCountry(cntry) : this.countries.slice())
                )
    }

    ngOnInit(){
        this.getCountries();
        this.getDrugs();
    }

    getCountries() {
        this.searchService.getAllCountries().subscribe((data: any) => {
            this.countries = data;
        })
    }

    getDrugs() {
        this.searchService.getAllDrugs().subscribe((data: any) => {
            this.drugs = data;
        })
    }

    filterDrugs(name: string) {
        return this.drugs.filter((d) => d.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    filterCountry(name: string) {
        return this.countries.filter((c) => c.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    
    onNoClick() : void {
        console.log("close");
        this.dialogRef.close();
    }

    onSubmit() {
        this.selectedData = { name: this.drugCtrl.value, country: this.countryCtrl.value };
        this.dialogRef.close(this.selectedData);
    }

    checkState() {
        if (this.drugCtrl.value == null || this.countryCtrl.value == null) {
            this.isEnabled = false;
        } else {
            this.isEnabled = true;
        }
    }

}