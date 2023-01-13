import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailkomikService {
  constructor(private http: HttpClient) {}
  getDetailKomik(idKomik: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('id', idKomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/detailkomik.php',
      body
    );
  }
  getFavorite(idkomik: number, iduser: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('iduser', iduser);
    body = body.set('idKomik', idkomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/getFavorite.php',
      body
    );
  }
  getComment(idkomik: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('komik_id', idkomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/getComment.php',
      body
    );
  }
  addRating(idKomik: number, iduser: number, rating: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('iduser', iduser);
    body = body.set('idKomik', idKomik);
    body = body.set('rating', rating);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/addRating.php',
      body
    );
  }
  addFavorite(idkomik: number, idUser: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('ID', idUser);
    body = body.set('komik_id', idkomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/addFavorite.php',
      body
    );
  }
  addKomen(idkomik: number, iduser: number, komen: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('user_id', iduser);
    body = body.set('komik_id', idkomik);
    body = body.set('komen', komen);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/addKomen.php',
      body
    );
  }
  unFavorite(idkomik: number, idUser: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('ID', idUser);
    body = body.set('komik_id', idkomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/deleteFavorite.php',
      body
    );
  }
  loadComicPages(idkomik: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('id', idkomik);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/baca.php',
      body
    );
  }
}
