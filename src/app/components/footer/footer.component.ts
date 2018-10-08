// angular core
import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'footer';
  year: any;

  constructor() {
    const d = new Date();
    this.year = d.getFullYear();
  }

  ngOnInit() {
  }

}
