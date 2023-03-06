import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BottleViewComponent } from './bottle-view/bottle-view.component';
import { CartComponent } from './cart/cart.component';

// const routes: Routes = [{ path: 'cart', component: cartComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottleViewComponent,
    DetailViewComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'detail-view', component: DetailViewComponent },
      { path: 'bottle-view', component: BottleViewComponent },
      { path: 'cart', component: CartComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
