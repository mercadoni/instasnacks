// angular core
import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Input() isInDrawer;
  @Input() index;
  @Output() productSelected = new EventEmitter();
  @Output() productRemoved = new EventEmitter();
  @HostBinding('attr.class') cssClass = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3';

  constructor() { }

  ngOnInit() {
  }

  addProduct(product) {
    const productAdded = true;
    this.productSelected.emit([product, productAdded]);
  }

  removeProduct() {
    this.product.index = this.index;
    this.productRemoved.emit(this.product.index);
  }
}
