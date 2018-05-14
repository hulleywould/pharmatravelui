import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataObj = { name: "" , country: ""};

  drugCountryChanged(event) {
    this.dataObj = { name: event.name, country: event.country };
    console.log(event);
  }

}
