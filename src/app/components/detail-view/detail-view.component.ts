import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit, OnDestroy {
  @Input() bottles: any;
  constructor() {}
  
  // lifecycle hooks

  ngOnInit() {}

  ngOnDestroy(): void {}

  // class methods
}
