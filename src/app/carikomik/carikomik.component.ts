import { Component, OnInit } from '@angular/core';
import { DaftarkomikService } from '../daftarkomik.service';
import { CarikomikService } from '../carikomik.service';
import { KomikModel } from '../komik.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carikomik',
  templateUrl: './carikomik.component.html',
  styleUrls: ['./carikomik.component.scss'],
})
export class CarikomikComponent implements OnInit {
  filterTerm: string = '';
  listKomik = Array();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private daftarKomik: DaftarkomikService,
    private carikomik: CarikomikService
  ) {}

  test(e: any) {
    let judul = e.target.innerText;
    this.carikomik.getComic(judul).subscribe((data) => {
      let id = data[0].id;
      this.router.navigate([`./detailkomik/${id}`]);
    });
  }

  ngOnInit() {
    this.daftarKomik.LoadAllComics().subscribe((data) => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let komik = new KomikModel(
            data[i]['id'],
            data[i]['judul'],
            data[i]['sinopsis'],
            data[i]['link_poster']
          );
          this.listKomik.push(komik);
        }
      }
    });
  }
}
