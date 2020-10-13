import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPagesComponent } from './pages/no-pages/no-pages.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPagesComponent,
    HomeComponent,
    BreadCrumbsComponent,
    SideBarComponent,
    HeaderComponent,
    ProgressComponent,
    Graph1Component,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
