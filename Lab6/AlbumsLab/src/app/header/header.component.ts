import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  goToHome() {
    this.router.navigate(["home"])
  }

  goToAbout() {
    this.router.navigate(["about"])  }

  gotoAlbums() {
    this.router.navigate(["albums"])
  }
}
