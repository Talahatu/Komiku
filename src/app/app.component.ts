import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_id = '';
  constructor(
    private router: Router,
    private storage: Storage,
    public ls: LoginService
  ) {}
  async ngOnInit() {
    await this.storage.create();
    this.user_id = await this.storage.get('user_id');
  }
  login_user = '';
  login_passwd = '';
  login_error = '';
  login() {
    this.ls.login(this.login_user, this.login_passwd).subscribe((data) => {
      if (data.result == 'success') {
        this.user_id = data.data['id'];
        this.storage.set('user_id', this.user_id);
        localStorage.setItem('id', this.user_id);
      } else {
        this.login_error = 'username atau password salah';
      }
    });
  }
  logout() {
    this.storage.remove('user_id');
    localStorage.clear();
    this.router.navigate([' ']);
  }
}
