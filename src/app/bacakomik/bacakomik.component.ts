import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailkomikService } from '../detailkomik.service';
@Component({
  selector: 'app-bacakomik',
  templateUrl: './bacakomik.component.html',
  styleUrls: ['./bacakomik.component.scss'],
})
export class BacakomikComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailkomik: DetailkomikService
  ) {}

  komikId: number = 0;
  pages: Array<string> = Array();
  back() {
    this.router.navigate([`./detailkomik/${this.komikId}`]);
  }
  ngOnInit() {
    this.route.params.subscribe((params) => (this.komikId = params['id']));
    this.detailkomik.loadComicPages(this.komikId).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.pages.push(data[i]['url']);
      }
    });
  }
}
