import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterServiceService } from 'src/app/service/filter-service/filter-service.service';
import { GetServiceService } from '../../service/get-service/get-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  bottles: any;
  filteredBottles: any;
  filtered: boolean = false;
  ascendingOrder: boolean = true;

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private getService: GetServiceService,
    private filterService: FilterServiceService
  ) {}

  // lifecycle hooks

  ngOnInit() {
    this.subscription = this.getService
      .getData()
      .subscribe((bottles) => (this.bottles = bottles));
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
