import { Component, OnInit } from '@angular/core';
import { DaftarkomikService } from '../daftarkomik.service';
import { Storage } from '@ionic/storage-angular';
import { KomikModel } from '../komik.model';
import { ActivatedRoute, Router } from '@angular/router';
import { KategoriService } from '../kategori.service';

@Component({
  selector: 'app-daftarkomik',
  templateUrl: './daftarkomik.component.html',
  styleUrls: ['./daftarkomik.component.scss'],
})
export class DaftarkomikComponent implements OnInit {
  constructor(
    private storage: Storage,
    private daftarKomik: DaftarkomikService,
    private route: Router,
    private router: ActivatedRoute,
    private kategoriService: KategoriService
  ) {}
  komikArr = Array();
  totalData = 10;
  judul = 'title';
  kategori = 'genre';
  sinopsis = 'lorem ipsum';
  url = 'https://ionicframework.com/docs/img/demos/card-media.png';

  kategoriID: number = 0;

  detailkomik(id: number) {
    console.log('KOMIK ID: ' + id);
    console.log('KOMIK ARR: ' + this.komikArr);

    this.route.navigate([`./detailkomik/${id}`]);
  }
  ngOnInit() {
    this.router.params.subscribe(
      (params) => (this.kategoriID = params['kategoriId'])
    );
    this.kategoriID = this.kategoriID == undefined ? 0 : this.kategoriID;
    console.log(this.kategoriID);

    if (this.kategoriID == 0) {
      this.daftarKomik.LoadAllComics().subscribe((data) => {
        if (data.length > 0) {
          this.totalData = data.length;
          for (let i = 0; i < this.totalData; i++) {
            let komik = new KomikModel(
              data[i]['id'],
              data[i]['judul'],
              data[i]['sinopsis'],
              data[i]['link_poster']
            );
            this.komikArr.push(komik);
          }
        }
      });
    } else {
      this.kategoriService
        .loadKomikByCategory(this.kategoriID)
        .subscribe((data) => {
          if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
              let komik = new KomikModel(
                data[i]['komik_id'],
                data[i]['judul'],
                data[i]['sinopsis'],
                data[i]['link_poster']
              );
              this.komikArr.push(komik);
            }
          }
        });
    }
  }
}
