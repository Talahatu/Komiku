export class UserModel {
  public id: number | undefined;
  public username: string | undefined;
  public password: string | undefined;

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
