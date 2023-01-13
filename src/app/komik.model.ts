export class KomikModel {
  public id: number | undefined;
  public judul: string | undefined;
  public sinopsis: string | undefined;
  public link_poster: string | undefined;
  public rating: number | undefined;

  constructor(
    id: number,
    judul: string,
    sinopsis: string,
    link: string,
    rating: number = 0
  ) {
    this.id = id;
    this.judul = judul;
    this.sinopsis = sinopsis;
    this.link_poster = link;
    this.rating = rating;
  }
}
