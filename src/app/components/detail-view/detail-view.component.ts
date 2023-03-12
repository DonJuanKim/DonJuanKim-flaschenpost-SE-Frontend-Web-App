import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductData } from 'src/app/Interfaces';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit, OnDestroy {
  @Input() bottles: ProductData[] | undefined;
  constructor() {}

  // lifecycle hooks

  ngOnInit() {}

  ngOnDestroy(): void {}

  // class methods
}
