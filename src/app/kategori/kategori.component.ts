import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KategoriService } from '../kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss'],
})
export class KategoriComponent implements OnInit {
  constructor(private kategori: KategoriService, private route: Router) {}

  listKategori = Array();

  searchByCategory(id: number) {
    this.route.navigate([`./daftarkomik/${id}`]);
  }

  ngOnInit() {
    this.kategori.loadKategori().subscribe((data) => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          this.listKategori.push([data[i]['id'], data[i]['nama']]);
        }
      }
    });
  }
}
