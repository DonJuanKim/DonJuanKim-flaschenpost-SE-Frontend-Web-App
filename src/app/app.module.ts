// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Services
import { GetServiceService } from './service//get-service/get-service.service';
import { FilterServiceService } from './service/filter-service/filter-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pages
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductBeerPageComponent } from './pages/product-beer-page/product-beer-page.component';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { BottleViewComponent } from './components/bottle-view/bottle-view.component';

// Material style
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottleViewComponent,
    DetailViewComponent,
    ProductPageComponent,
    ProductBeerPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatChipsModule,
    MatButtonToggleModule,
  ],
  providers: [GetServiceService, FilterServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
