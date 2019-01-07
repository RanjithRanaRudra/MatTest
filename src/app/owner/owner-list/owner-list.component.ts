import { Owner } from './../../interface/owner.model';
import { RepositoryService } from './../../Shared/repository.service';
import { PeriodicElement } from './../../interface/periodic-element.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dob', 'address', 'details', 'delete'];
  dataSource: any;
  ELEMENT_DATA;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public getAllOwners = () => {
    this.repoService.getData('getOwners')
    .subscribe(res => {
      this.dataSource.data = res;
    }, (error) => {
      this.ELEMENT_DATA = [];
    });
    /* const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]; */

    this.dataSource = new MatTableDataSource();
  }
  public doFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public delete = (id) => {alert(id);
    const url = 'deleteOwner/' + id;
    this.repoService.delete(url).subscribe(res => {
      console.log(res);
    });
  }
}
