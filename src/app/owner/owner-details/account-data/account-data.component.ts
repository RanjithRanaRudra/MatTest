import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {

  // @Input() public accounts: Account[] ;
  @Input()  accounts = [
      {
        id: '1',
        dateCreated: new Date(),
        accountType: 'string',
        ownerId: 'string'
      }
    ] ;

  constructor() { }

  ngOnInit() {
    console.log(this.accounts);
  }

}
