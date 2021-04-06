import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TwoColumnPanelComponent } from './components/two-column-panel/two-column-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PanelComponent,
    HomePageComponent,
    ContactPageComponent,
    TeamPageComponent,
    LocationsPageComponent,
    AboutPageComponent,
    TwoColumnPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
