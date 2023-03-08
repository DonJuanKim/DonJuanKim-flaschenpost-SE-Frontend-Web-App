// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { BottleViewComponent } from './components/bottle-view/bottle-view.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

// Services
import { GetServiceService } from './service//get-service/get-service.service';
import { FilterServiceService } from './service/filter-service/filter-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottleViewComponent,
    DetailViewComponent,
    CartComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [GetServiceService, FilterServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
