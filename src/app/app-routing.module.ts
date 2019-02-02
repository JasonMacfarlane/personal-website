import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperComponent } from './developer/developer.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: 'developer', component: DeveloperComponent, data: { animation: 'DeveloperPage', class: 'developer' } },
  { path: 'music', component: MusicComponent, data: { animation: 'MusicPage', class: 'music' } },
  { path: '', component: HomeComponent, data: { animation: 'HomePage', class: 'home' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
