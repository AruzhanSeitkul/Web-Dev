import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "./services/albums.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AlbumsLab';

  constructor(private albumService: AlbumsService) {
  }
  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe(result =>{
      this.albumService.albums = result
    }, error => {
      console.log(error)
    })
  }
}
