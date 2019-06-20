import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { NameGraphicsComponent } from './core/name-graphics/name-graphics.component';
import { MenuComponent } from './core/menu/menu.component';
import { LogoComponent } from './core/logo/logo.component';
import { WorksComponent } from './feature/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NameGraphicsComponent,
    MenuComponent,
    LogoComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
