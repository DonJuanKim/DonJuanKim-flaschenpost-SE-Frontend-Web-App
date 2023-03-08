import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent {
  bottles: any;

  constructor(private appComponent: AppComponent) {
    this.bottles = this.appComponent.getBottles();
  }
}
