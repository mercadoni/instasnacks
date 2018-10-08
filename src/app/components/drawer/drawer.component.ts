// angular core
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DrawerComponent implements OnInit, OnChanges {
  @HostBinding('attr.class') cssClass = 'drawer col-9 col-sm-4 pt-3 pb-5 shadow';
  @Input() isVisible;
  @Input() product;
  @Input() productAdded;
  @Output() toggle = new EventEmitter();
  total = 0;
  productList = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cssClass = this.isVisible ? 'drawer col-9 col-sm-4 pt-3 pb-5 shadow open' : 'drawer col-9 col-sm-4 pt-3 pb-5 shadow';

    if (this.product && changes['productAdded']) {
      this.productList.push(this.product);
      this.total += this.product.price ? this.product.price : 0;
    }
  }

  removeProduct(e) {
    const productPriceRemoved = this.productList.filter((product, index) => e === index);

    this.total -= productPriceRemoved[0].price ? productPriceRemoved[0].price : 0;

    this.productList.splice(e, 1);
  }
}
