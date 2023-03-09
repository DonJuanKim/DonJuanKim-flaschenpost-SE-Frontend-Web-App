import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetServiceService } from '../../service/get-service/get-service.service';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent implements OnInit, OnDestroy {
  subscription: any;
  bottles: any;

  constructor(private getService: GetServiceService) {}

  // lifecycle hooks

  ngOnInit() {
    this.subscription = this.getService.getData();
    this.subscription.subscribe((response: any) => {
      this.bottles = response;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
