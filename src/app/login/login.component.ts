import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from './login.service';
//import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit() {
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'http://localhost:8080/api/login';
  }

  login() {
    this.loading = true;
    //this.returnUrl = this.route.snapshot.queryParams['App'] || '.';
    //this.router.navigate(['./app.component']);
/*    this.loginService.login().subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
    });*/
  }

  logout() {
    this.loginService.logout();
  }
}
