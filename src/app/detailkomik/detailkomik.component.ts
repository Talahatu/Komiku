import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailkomikService } from '../detailkomik.service';
import { KomikModel } from '../komik.model';

@Component({
  selector: 'app-detailkomik',
  templateUrl: './detailkomik.component.html',
  styleUrls: ['./detailkomik.component.scss'],
})
export class DetailkomikComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private detailkomik: DetailkomikService,
    private router: Router
  ) {}
  listKomik = Array();
  listKomentar = Array();
  myIcon = 'heart-outline';
  komik: any = '';
  komikId: number = 0;
  userId: any = localStorage.getItem('id');

  toggle() {
    if (this.myIcon == 'heart') {
      this.detailkomik
        .unFavorite(this.komikId, this.userId)
        .subscribe((data) => {
          if (data['message'] > 0) {
            this.myIcon = 'heart-outline';
          }
        });
    } else if (this.myIcon == 'heart-outline') {
      this.detailkomik
        .addFavorite(this.komikId, this.userId)
        .subscribe((data) => {
          if (data['message'] > 0) {
            this.myIcon = 'heart';
          }
        });
    }
  }

  bacakomik() {
    this.router.navigate([`./bacakomik/${this.komikId}`]);
  }
  comment(evt: any) {
    let comment = evt.target.value;
    evt.target.value = '';
    this.detailkomik
      .addKomen(this.komikId, this.userId, comment)
      .subscribe((data) => {
        console.log(data['message']);
        this.listKomentar.push(comment);
      });
  }
  rate(evt: any) {
    let rating: number =
      evt.target.value < 0 ? 0 : evt.target.value > 10 ? 10 : evt.target.value;
    this.detailkomik
      .addRating(this.komikId, this.userId, rating)
      .subscribe((data) => {
        console.log(data['message']);
      });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => (this.komikId = params['id']));
    this.detailkomik.getDetailKomik(this.komikId).subscribe((data) => {
      if (data.length > 0) {
        this.komik = new KomikModel(
          data[0]['id'],
          data[0]['judul'],
          data[0]['sinopsis'],
          data[0]['link_poster'],
          data[0]['AVGRATE']
        );
        console.log('AVGRATE: ', data[0]['AVGRATE']);
      }
    });
    this.detailkomik
      .getFavorite(this.komikId, this.userId)
      .subscribe((data) => {
        this.myIcon = data.length > 0 ? 'heart' : 'heart-outline';
      });

    this.detailkomik.getComment(this.komikId).subscribe((data) => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          this.listKomentar.push(data[i]['komentar']);
        }
      }
    });
  }
}
