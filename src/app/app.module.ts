// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { BottleViewComponent } from './bottle-view/bottle-view.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

// Services
import { GetServiceService } from './service/get-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottleViewComponent,
    DetailViewComponent,
    CartComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [GetServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
