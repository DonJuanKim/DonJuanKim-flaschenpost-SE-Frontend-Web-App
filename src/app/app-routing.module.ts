import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BottleViewComponent } from './bottle-view/bottle-view.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'detail-view', component: DetailViewComponent },
  { path: 'bottle-view', component: BottleViewComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'detail-view', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
