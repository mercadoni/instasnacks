// angular core
import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

// services
import {ProductsServiceService} from '../../services/products-service/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() isInDrawer;
  @Input() productList;
  @Output() productSelected = new EventEmitter();
  @Output() productRemoved = new EventEmitter();
  @HostBinding('attr.class') cssClass;
  isLoading = true;
  products;
  orderPrice;

  constructor(private _productsServiceService: ProductsServiceService) { }

  ngOnInit() {
    this.cssClass = !this.isInDrawer ? 'row' : 'd-block';

    if (this.productList && this.isInDrawer) {
      this.products = this.productList;
    } else {
      this.getProducts();
    }
  }

  getProducts() {
    this.isLoading = true;

    this._productsServiceService.getAllProducts()
      .subscribe(
        (response) => {
          this.products = response['retailer'].products;
          this.isLoading = false;
        },
        error => error.logLevel
      );
  }

  addProduct(e) {
    this.productSelected.emit(e);
  }

  removeProduct(e) {
    this.productRemoved.emit(e);
  }

  orderByPrice(e) {
    if (!this.isInDrawer) {
      this.orderPrice = e.target.checked;
    }
  }
}
