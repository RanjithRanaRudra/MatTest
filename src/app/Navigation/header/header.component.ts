import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit() {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
