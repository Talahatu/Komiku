import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  constructor(private http: HttpClient) {}
  loadKategori(): Observable<any> {
    return this.http.get(
      'https://ubaya.fun/hybrid/160420014/komiku_api/kategori.php'
    );
  }

  loadKomikByCategory(kategoriId: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('kategori_id', kategoriId);
    return this.http.post(
      'https://ubaya.fun/hybrid/160420014/komiku_api/daftar_komik.php',
      body
    );
  }
}
