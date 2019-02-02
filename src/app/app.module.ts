import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { Angulartics2Module } from 'angulartics2';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faBars, faEnvelope, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faProductHunt, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './_components/header/header.component';
import { ModalComponent } from './_components/modal/modal.component';
import { ScrollArrowComponent } from './_components/scroll-arrow/scroll-arrow.component';
import { StarComponent } from './_components/star/star.component';

import { HttpConfigInterceptor } from './_interceptors/http-config/http-config.interceptor';

import { GaDirective } from './_directives/ga/ga.directive';
import { SocialShareDirective } from './_directives/social-share/social-share.directive';

import { GaService } from './_services/ga/ga.service';
import { ModalService } from './_services/modal/modal.service';
import { MusicService } from './_services/music/music.service';
import { ScrollService } from './_services/scroll/scroll.service';
import { SocialShareService } from './_services/social-share/social-share.service';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    GaDirective,
    HeaderComponent,
    HomeComponent,
    ModalComponent,
    MusicComponent,
    ScrollArrowComponent,
    SocialShareDirective,
    StarComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPBnqqujgKo-tdSu8QF2TWZ3wby3gZXlQ'
    }),
    Angulartics2Module.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    GaService,
    ModalService,
    MusicService,
    ScrollService,
    SocialShareService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  constructor() {
    library.add(faAngleDown, faBars, faEnvelope, faFacebook, faGithub, faLinkedin, faProductHunt, faStar, faTimes, faTwitter, faYoutube);
  }
}
