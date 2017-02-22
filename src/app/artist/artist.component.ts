import { SearchService } from './../search/search.service';
import { Album } from './../album';
import { Artist } from './../artist';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])

      .subscribe((id) => {
        this.searchService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          })
      });
  }

}
