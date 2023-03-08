import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FilterServiceService } from 'src/app/service/filter-service/filter-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  bottles: any;
  ascendingOrder: boolean = true;
  filteredBottles: any;
  filtered = false;

  constructor(
    private appComponent: AppComponent,
    private filterService: FilterServiceService
  ) {
    this.bottles = this.appComponent.getBottles();
  }

  sortByPrice(): void {
    // This if-else statement enables "sortByPrice" to sort "filteredBottles" by price
    if (this.filtered) {
      this.filteredBottles = this.filterService.sortByPrice(
        this.filteredBottles,
        this.ascendingOrder
      );
    } else {
      this.bottles = this.filterService.sortByPrice(
        this.bottles,
        this.ascendingOrder
      );
    }
    this.ascendingOrder = !this.ascendingOrder;
  }

  filterExpensiveBeers(): void {
    this.filteredBottles = this.filterService.filterExpensiveBeers(
      this.bottles
    );
    console.log(this.filteredBottles);
    this.filtered = !this.filtered;
  }
}
