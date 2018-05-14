import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material.module';
import { SearchDialogComponent } from './search/searchdialog.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchService } from './search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugserviceService } from './drugs/drugservice.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDialogComponent,
    HeaderComponent,
    DrugsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    SearchDialogComponent
  ],
  providers: [SearchService, DrugserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
