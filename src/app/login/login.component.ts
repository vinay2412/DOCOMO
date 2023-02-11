import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login, register, signUp } from '../data_type';
import { SellerService } from '../serviecs/seller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showLogin = false;

  constructor(private seller: SellerService,
    private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  Register(data: register): void {
    this.seller.addCustomer(data);
    console.log(data);
  }

  login(data: login): void {
    this.seller.loginCustomer(data);
    console.log(data);
  }

  openSignIn() {
    this.showLogin = false;
  }

  openSignUp(){
    this.showLogin = true;
  }
}
