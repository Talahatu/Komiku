import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarikomikService {
  constructor(private http: HttpClient) {}
  getComic(judul: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('input', judul);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/cari.php',
      body
    );
  }
}
