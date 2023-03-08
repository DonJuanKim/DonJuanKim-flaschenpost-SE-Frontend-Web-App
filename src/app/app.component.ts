import { Component, OnInit } from '@angular/core';
import { GetServiceService } from './service/get-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-beautiful-website';
  bottles: any;

  constructor(private getService: GetServiceService) {}

  ngOnInit() {
    const storedData = localStorage.getItem('bottlesData');
    if (storedData) {
      this.bottles = JSON.parse(storedData);
    } else {
      this.getService.getData();
    }
  }

  getBottles() {
    return this.bottles;
  }
}
