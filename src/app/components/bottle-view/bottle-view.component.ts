import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductData } from 'src/app/Interfaces';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent implements OnInit, OnDestroy {
  @Input() bottles: ProductData[] | undefined;

  constructor() {}

  // lifecycle hooks

  ngOnInit() {}

  ngOnDestroy(): void {}

  // class methods
}
