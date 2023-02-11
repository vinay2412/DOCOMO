import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { login, register, signIn, signUp } from '../data_type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  islogined = new BehaviorSubject<boolean>(false);
  isCustomerlogined = new BehaviorSubject<boolean>(false);

  api_url = 'http://localhost:3000';

  constructor(public httpClient: HttpClient, private roter: Router) { }

  addSeller(data: signUp) {
    this.httpClient
      .post(this.api_url + '/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.islogined.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.roter.navigate(['/']);
      });
  }
  loginSeller(data: signIn) {
    this.httpClient
      .get(
        this.api_url +
        `/seller?email=` +
        data.email +
        `&password=` +
        data.password, { observe: 'response' }).subscribe((response: any) => {
            console.log(response);
            if (response && response.body && response.body.length) {
              localStorage.setItem('seller', JSON.stringify(response.body));
              this.roter.navigate(['/seller-home']);
            }else{}
          })
  }

reloadSeller() {
  // if(localStorage.getItem('seller')){
  //   this.islogined.next(true);
  //     this.roter.navigate(['/seller-home'])
  // } else{
  //   this.roter.navigate(['/'])
  // }
}
addCustomer(data: register) {
  this.httpClient
    .post(this.api_url + '/customer', data, { observe: 'response' })
    .subscribe((result) => {
      this.islogined.next(true);
      localStorage.setItem('customer', JSON.stringify(result.body));
      this.roter.navigate(['/login']);
    });
}
loginCustomer(data: login) {
  this.httpClient
  .get(
    this.api_url +
    `/customer?email=` +
    data.email +
    `&password=` +
    data.password, { observe: 'response' }).subscribe((result:any) => {
      console.log(result);
      if (result && result.body && result.body.length) {
        localStorage.setItem('customer', JSON.stringify(result.body));
        this.roter.navigate(['/customer-home']);
      }
    })
}
}
