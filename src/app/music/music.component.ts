import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MusicService } from '../_services/music/music.service';
import { ScrollService } from '../_services/scroll/scroll.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  host: { 'class': 'route' },
})
export class MusicComponent implements OnInit {
  compositionsErr: string;
  compositionItems = [];
  coversErr: string;
  coverItems = [];

  constructor(
    private _domSanitizer: DomSanitizer,
    private _musicService: MusicService,
    public scrollService: ScrollService) { }

  ngOnInit() {
    this._musicService.getCompositions().subscribe(
      resp => {
        for (let item of resp.items) {
          this.compositionItems.unshift({
            title: item.snippet.title.replace(/\(Piano Music\)/g, ''),
            url: this._domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`),
          });
        }
      },
      error => {
        this.compositionsErr = 'There was an error retrieving my compositions, but you can still check out my YouTube channel. :)';
      }
    );

    this._musicService.getCovers().subscribe(
      res => {
        for (let item of res.items) {
          this.coverItems.unshift({
            title: item.snippet.title.replace(/\[Piano Cover\]/g, ''),
            url: this._domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`),
          });
        }
      },
      error => {
        this.coversErr = 'There was an error retrieving my covers, but you can still check out my YouTube channel. :)';
      }
    );
  }
}
