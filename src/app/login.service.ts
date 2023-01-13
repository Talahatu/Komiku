import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    console.log('Service: ' + username);

    let body = new HttpParams();
    body = body.set('id', username);
    body = body.set('password', password);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/login.php',
      body
    );
  }
}
