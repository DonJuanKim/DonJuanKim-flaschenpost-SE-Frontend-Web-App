import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  bottles: any;
  ascendingOrder: boolean = true;

  constructor(private appComponent: AppComponent) {
    this.bottles = this.appComponent.getBottles();
  }

  sortByPrice(): void {
    this.bottles.sort((a: any, b: any) => {
      if (this.ascendingOrder) {
        return a.articles[0].price - b.articles[0].price;
      } else {
        return b.articles[0].price - a.articles[0].price;
      }
    });
    this.ascendingOrder = !this.ascendingOrder;
  }
}
