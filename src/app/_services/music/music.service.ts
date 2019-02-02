import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private readonly _timeUntilReload = 86400000; // 1 day - time in ms before getting new data from YouTube API.
  private readonly _apiKey = 'AIzaSyCPBnqqujgKo-tdSu8QF2TWZ3wby3gZXlQ';
  private readonly _compositions = {
    url: 'https://www.googleapis.com/youtube/v3/playlistItems',
    playlistId: 'PLEttIKiwQB2gT01GXGazB6bgtNwQdLif1',
    part: 'snippet',
    maxResults: '10',
  };
  private readonly _covers = {
    url: 'https://www.googleapis.com/youtube/v3/playlistItems',
    playlistId: 'PLEttIKiwQB2hVmliyJOfPE1UZOsYFhCxs',
    part: 'snippet',
    maxResults: '10',
  };

  constructor(private _http: HttpClient) { }

  getCompositions(): Observable<any> {
    let compositions = localStorage.getItem('jm-music-compositions');

    if (compositions) {
      let prevTimestamp = JSON.parse(localStorage.getItem('jm-music-compositions')).timestamp;
      let currentTimestamp = new Date().getTime();

      if ((currentTimestamp - prevTimestamp) < this._timeUntilReload) {
        return of(JSON.parse(localStorage.getItem('jm-music-compositions')).data)
      }
    }

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams()
        .set('key', this._apiKey)
        .set('playlistId', this._compositions.playlistId)
        .set('part', this._compositions.part)
        .set('maxResults', this._compositions.maxResults),
    };

    return this._http.get(this._compositions.url, options).pipe(
      map(res => {
        let localStorageData = {
          timestamp: new Date().getTime(),
          data: res,
        };

        localStorage.setItem('jm-music-compositions', JSON.stringify(localStorageData));

        return res;
      }),
    );
  }

  getCovers(): Observable<any> {
    let covers = localStorage.getItem('jm-covers');

    if (covers) {
      let prevTimestamp = JSON.parse(localStorage.getItem('jm-covers')).timestamp;
      let currentTimestamp = new Date().getTime();

      if ((currentTimestamp - prevTimestamp) < this._timeUntilReload) {
        return of(JSON.parse(localStorage.getItem('jm-covers')).data)
      }
    }

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams()
        .set('key', this._apiKey)
        .set('playlistId', this._covers.playlistId)
        .set('part', this._covers.part)
        .set('maxResults', this._covers.maxResults),
    };

    return this._http.get(this._covers.url, options).pipe(
      map(res => {
        let localStorageData = {
          timestamp: new Date().getTime(),
          data: res,
        };

        localStorage.setItem('jm-covers', JSON.stringify(localStorageData));

        return res;
      }),
    );
  }
}
