import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { BottleViewComponent } from './components/bottle-view/bottle-view.component';

const routes: Routes = [
  { path: 'detail-view', component: DetailViewComponent },
  { path: 'bottle-view', component: BottleViewComponent },
  { path: '', redirectTo: 'detail-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
