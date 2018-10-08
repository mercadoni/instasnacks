import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-12';

  constructor() { }

  ngOnInit() {
  }

}
