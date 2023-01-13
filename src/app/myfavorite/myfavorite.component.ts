import { Component, OnInit } from '@angular/core';
import { DaftarkomikService } from '../daftarkomik.service';
import { Router } from '@angular/router';
import { KomikModel } from '../komik.model';

@Component({
  selector: 'app-myfavorite',
  templateUrl: './myfavorite.component.html',
  styleUrls: ['./myfavorite.component.scss'],
})
export class MyfavoriteComponent implements OnInit {
  constructor(private daftarKomik: DaftarkomikService, private route: Router) {}

  komikArr = Array();
  userID: any = localStorage.getItem('id');

  detailkomik(id: number) {
    this.route.navigate([`./detailkomik/${id}`]);
  }
  ngOnInit() {
    this.daftarKomik.LoadFavorite(this.userID).subscribe((data) => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
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
  }
}
