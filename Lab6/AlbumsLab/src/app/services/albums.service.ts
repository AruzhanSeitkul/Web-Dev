import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums: any = []
  URL: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {
  }

  getAlbums(): Observable<any> {
    return this.httpClient.get(this.URL + 'albums')
  }

  getAlbumById(id: number): Observable<any> {
    return this.httpClient.get( "https://jsonplaceholder.typicode.com/"+ `albums/${id}/`)
  }

  updateAlbum(userId: number, id: number, title: string): Observable<any> {
    return this.httpClient.put("https://jsonplaceholder.typicode.com/" + `albums/${id}/`, {
      "userId": userId,
      "id": id,
      "title": title
    })
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.httpClient.get(this.URL + `albums/${id}/photos`)
  }
}
