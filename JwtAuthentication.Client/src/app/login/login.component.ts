import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient)
  {
  }

  ngOnInit(): void {

  }
  login(form: NgForm) {
   // const credentials = JSON.stringify(form.value);
    const credentials = {
      "username" : form.value.username,
      "password" : form.value.password,
    }
    this.http.post("http://localhost:5000/api/auth/login", credentials)/*, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })*/
      .subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
}
