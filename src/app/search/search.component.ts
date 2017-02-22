import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Artist } from './../artist';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService: SearchService) { }

  ngOnInit() {
  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      });
  }

}
