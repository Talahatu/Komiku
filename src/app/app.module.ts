import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LoginService } from './login.service';
import { DaftarkomikService } from './daftarkomik.service';
import { CarikomikService } from './carikomik.service';
import { DetailkomikService } from './detailkomik.service';

import { DaftarkomikComponent } from './daftarkomik/daftarkomik.component';
import { CarikomikComponent } from './carikomik/carikomik.component';
import { KategoriComponent } from './kategori/kategori.component';
import { MyfavoriteComponent } from './myfavorite/myfavorite.component';
import { DetailkomikComponent } from './detailkomik/detailkomik.component';
import { BacakomikComponent } from './bacakomik/bacakomik.component';
import { KategoriService } from './kategori.service';

const appRoutes: Routes = [
  { path: '', component: DaftarkomikComponent },
  { path: 'daftarkomik', component: DaftarkomikComponent },
  { path: 'daftarkomik/:kategoriId', component: DaftarkomikComponent },
  { path: 'detailkomik/:id', component: DetailkomikComponent },
  { path: 'carikomik', component: CarikomikComponent },
  { path: 'kategori', component: KategoriComponent },
  { path: 'myfavorite', component: MyfavoriteComponent },
  { path: 'bacakomik/:id', component: BacakomikComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DaftarkomikComponent,
    DetailkomikComponent,
    CarikomikComponent,
    KategoriComponent,
    MyfavoriteComponent,
    BacakomikComponent,
  ],
  imports: [
    Ng2SearchPipeModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    IonicStorageModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginService,
    DaftarkomikService,
    CarikomikService,
    DetailkomikService,
    KategoriService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
