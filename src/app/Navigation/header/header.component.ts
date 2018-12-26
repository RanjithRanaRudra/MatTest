import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  username: String;

  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit() {
    this.username = 'Dracula';
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
