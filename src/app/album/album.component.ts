import { Component, OnInit } from '@angular/core';
import { Album } from './../album';
import { SearchComponent } from './../search/search.component';
import { SearchService } from './../search/search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])

      .subscribe((id) => {
        this.searchService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      });
  }

}
