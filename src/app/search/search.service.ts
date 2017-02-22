import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  private searchUrl: string;
  private artistUrl: string;

  constructor(private _http: Http) {

   }

   searchMusic(str: string, type = 'artist'){
    // this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'$market=US';
    this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&type=artist';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
   }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this._http.get(this.artistUrl)
    .map(res => res.json());
   }

}
