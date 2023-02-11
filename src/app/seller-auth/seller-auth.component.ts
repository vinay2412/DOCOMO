import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { login, signIn, signUp } from '../data_type';
import { SellerService } from '../serviecs/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;

  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: signUp): void {
    this.seller.addSeller(data);
  }

  signIn(data: signIn) {
    this.seller.loginSeller(data);
  }

  openSignIn() {
    this.showLogin = false;
  }
  openSignUp() {
    this.showLogin = true;
  }
}
