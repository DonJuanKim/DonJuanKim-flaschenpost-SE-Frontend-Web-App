import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { BottleViewComponent } from './components/bottle-view/bottle-view.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: 'detail-view', component: DetailViewComponent },
  { path: 'bottle-view', component: BottleViewComponent },
  { path: 'product-page', component: ProductPageComponent },
  { path: '', redirectTo: 'product-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
