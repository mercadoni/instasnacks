// angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

// pipes
import { OrderByPricePipe } from './pipes/orderByPrice/order-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    DrawerComponent,
    FooterComponent,
    ProductComponent,
    OrderByPricePipe,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
