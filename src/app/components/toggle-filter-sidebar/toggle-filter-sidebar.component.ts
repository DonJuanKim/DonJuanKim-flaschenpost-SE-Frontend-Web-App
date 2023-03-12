import { Component, Input } from '@angular/core';
import { ProductData } from 'src/app/ProductData';
import { FilterServiceService } from 'src/app/service/filter-service/filter-service.service';

@Component({
  selector: 'app-toggle-filter-sidebar',
  templateUrl: './toggle-filter-sidebar.component.html',
  styleUrls: ['./toggle-filter-sidebar.component.css'],
})
export class ToggleFilterSidebarComponent {
  filteredBottles: ProductData[] = [];
  filtered: boolean = false;


  constructor(private filterService: FilterServiceService) {}

  @Input() bottles: any;

  views = [
    { name: 'Details View', url: '/detail-view' },
    { name: 'Bottle View', url: '/bottle-view' },
  ];
  activeView = this.views[0];
  // class methods

  sortByPrice(order: boolean): void {
    // This if-else statement enables "sortByPrice" to sort "filteredBottles" by price
    if (this.filtered) {
      this.filteredBottles = this.filterService.sortByPrice(
        this.filteredBottles,
        order
      );
    } else {
      this.bottles = this.filterService.sortByPrice(
        this.bottles,
        order
      );
    }
    // this.ascendingOrder = !this.ascendingOrder;
  }

  filterExpensiveBeers(): void {
    this.filteredBottles = this.filterService.filterExpensiveBeers(
      this.bottles
    );
    console.log(this.filteredBottles.length);
    this.filtered = !this.filtered;
  }
}
