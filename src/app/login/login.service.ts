import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
  public isLoggedIn: boolean = false;
  private loginPath = 'http://localhost:8080/api/login'

  constructor(private http: HttpClient) 
  { 
      this.isLoggedIn = false;
  }

  /*login(): Observable<boolean> {
    return this.http.get<boolean>(this.loginPath);
  }*/

    login(): boolean {
    return this.isLoggedIn;
  }
  logout(): void {
    this.isLoggedIn = false;
  }

  /*addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }*/
}
