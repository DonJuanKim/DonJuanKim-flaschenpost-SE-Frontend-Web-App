import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bottle-view',
  templateUrl: './bottle-view.component.html',
  styleUrls: ['./bottle-view.component.css'],
})
export class BottleViewComponent implements OnInit, OnDestroy {
  @Input() bottles: any;

  constructor() {}

  // lifecycle hooks

  ngOnInit() {}

  ngOnDestroy(): void {}

  // class methods
}
