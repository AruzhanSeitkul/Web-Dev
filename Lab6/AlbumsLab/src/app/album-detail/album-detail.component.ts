import { Component } from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent {
  album: any;
  id: number;
  public isEdit: boolean = false
  editableText: string = "";

  constructor(private albumService: AlbumsService, private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id']
    this.getAlbumById()
  }

  getAlbumById() {
    this.albumService.getAlbumById(this.id).subscribe(result => {
      this.album = result
    }, error => {
      console.log(error)
    })
  }

  edit() {
    this.isEdit = true
    this.editableText = this.album.title
  }

  save() {
    this.albumService.albums.forEach((album: any) => {
      if (album.title === this.album.title) {
        album.title = this.editableText
      }
    })
    this.album.title = this.editableText
    this.isEdit = false
  }

  goBack() {
    this.router.navigate(['albums'])
  }

  goToPhotos(id:number) {
    this.router.navigate([`albums/${id}`+`/photos`])
  }
}
