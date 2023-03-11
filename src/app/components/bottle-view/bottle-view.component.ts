import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GetServiceService } from '../../service/get-service/get-service.service';
import { FilterServiceService } from 'src/app/service/filter-service/filter-service.service';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  bottles: any;
  filteredBottles: any;
  filtered: boolean = false;
  ascendingOrder: boolean = true;

  constructor(
    private getService: GetServiceService,
    private filterService: FilterServiceService
  ) {}

  // lifecycle hooks

  ngOnInit() {
    var observable = this.getService.getData();
    this.subscription = observable.subscribe((response: any) => {
      this.bottles = response;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // class methods

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
