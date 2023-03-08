import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  bottles: any;

  constructor(private appComponent: AppComponent) {
    this.bottles = this.appComponent.getBottles();
  }
}
