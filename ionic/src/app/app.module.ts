import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { environment } from '../environments/environment';

// const socketConfig: SocketIoConfig = { url: environment.serviceUrl, options: {} };
const socketConfig: SocketIoConfig = { url: null };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SocketIoModule.forRoot(socketConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
