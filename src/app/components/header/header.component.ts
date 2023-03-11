import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  links = [
    { name: 'Details View', url: '/detail-view' },
    { name: 'Bottle View', url: '/bottle-view' },
  ];
  activeLink = this.links[0];

  handleActiveLink() {
    this.activeLink == this.links[0]
      ? (this.activeLink = this.links[1])
      : (this.activeLink = this.links[0]);
  }
}
