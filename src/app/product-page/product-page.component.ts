import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetServiceService } from 'src/app/service/get-service/get-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  fetchedBottles: any;
  resultBottles: any;

  constructor(private getService: GetServiceService) {}

  // lifecycle hooks

  ngOnInit() {
    this.subscription = this.getService
      .getData()
      .subscribe((fetchedBottles) => (this.fetchedBottles = fetchedBottles));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // class methods
  addItem(resultBottles: any) {
    this.resultBottles = resultBottles;
  }
}
