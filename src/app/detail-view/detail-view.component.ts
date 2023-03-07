import { Component } from '@angular/core';
import { GetServiceService } from '../service/get-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent {
  bottles: any;
  constructor(private getService: GetServiceService) {}

  ngOnInIt() {
    this.fetchBottles;
  }

  fetchBottles() {
    this.getService.getData().subscribe((res) => {
      console.log(res);
      this.bottles = res;
    });
  }
}
