import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [``]
})
export class CustomersComponent implements OnInit  {
  customers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://localhost:5001/WeatherForecast", {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.customers = response;
      console.log(this.customers);
    }, err => {
      console.log(err)
    });
  }
}
