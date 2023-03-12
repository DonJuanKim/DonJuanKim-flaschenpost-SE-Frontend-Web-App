import { Component, Input } from '@angular/core';
import { ProductData } from 'src/app/Interfaces';
import { FilterServiceService } from 'src/app/service/filter-service/filter-service.service';

@Component({
  selector: 'app-product-beer-page',
  templateUrl: './product-beer-page.component.html',
  styleUrls: ['./product-beer-page.component.css'],
})
export class ProductBeerPageComponent {
  filteredBottles: ProductData[] = [];
  filtered: boolean = false;

  constructor(private filterService: FilterServiceService) {}

  views = [
    { name: 'Details View', url: '/detail-view' },
    { name: 'Bottle View', url: '/bottle-view' },
  ];
  activeView = this.views[0];

  @Input()
  bottles: ProductData[] = [];

  // class methods

  sortByPrice(order: boolean): void {
    // This if-else statement enables "sortByPrice" to sort "filteredBottles" by price
    if (this.filtered) {
      this.filteredBottles = this.filterService.sortByPrice(
        this.filteredBottles,
        order
      );
    } else {
      this.bottles = this.filterService.sortByPrice(this.bottles, order);
    }
  }

  filterExpensiveBeers(): void {
    this.filteredBottles = this.filterService.filterExpensiveBeers(
      this.bottles
    );
    console.log(this.filteredBottles.length);
    this.filtered = !this.filtered;
  }
}
