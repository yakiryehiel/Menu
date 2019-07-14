import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { IMenuItem } from './menuItems';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pointer Menu';
  private listOfMenuItems: IMenuItem[];
  errorMessage: any;

  constructor(private rest: RestService, private router: Router){
    this.getMenuItems();

    //this.router.navigate(['/login-root']);
    //this.router.navigate(['/app-root'])
  }

  getMenuItems(){
    this.rest.getMenu().subscribe(
      items => this.listOfMenuItems = items
    );
  }
}
