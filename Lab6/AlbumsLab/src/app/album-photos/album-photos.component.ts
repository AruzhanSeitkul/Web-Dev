import { Component } from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent {
  public photos: any[] = []
  albumId: number = 0

  constructor(private albumService: AlbumsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.albumId = this.activatedRoute.snapshot.params['id']
    this.albumService.getAlbumPhotos(this.albumId).subscribe(result => {
      console.log(result)
      this.photos = result;
    }, error => {
      console.log(error)
    })
  }

  goToAlbum() {
    this.router.navigate(['albums/' + this.albumId]);
  }
}
