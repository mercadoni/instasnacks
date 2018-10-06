// angular core
import {Component, EventEmitter, HostBinding, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  @HostBinding('attr.class') cssClass = 'header';
  companyName = 'Mercasnacks';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggle.emit();
  }
}
