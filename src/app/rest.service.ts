import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IMenuItem } from './menuItems';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private menuItemsPath = 'http://localhost:8080/api/menu'
  constructor(private http: HttpClient) { }

  getMenu(): Observable<IMenuItem[]> {
    return this.http.get<IMenuItem[]>(this.menuItemsPath);
  }
}
