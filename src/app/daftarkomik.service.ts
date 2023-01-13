import { Injectable } from '@angular/core';
import { KomikModel } from './komik.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DaftarkomikService {
  constructor(private http: HttpClient) {}
  LoadAllComics(): Observable<any> {
    return this.http.get(
      'https://ubaya.fun/hybrid/160420014/komiku_api/daftar_komik.php'
    );
  }
  LoadFavorite(iduser: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('iduser', iduser);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/getFavorite.php',
      body
    );
  }
}
