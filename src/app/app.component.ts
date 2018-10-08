// angular core
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen = false;
  productSelected;
  productAdded;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  addProduct(e) {
    this.productSelected = e[0];
    this.productAdded = [1];
  }
}
