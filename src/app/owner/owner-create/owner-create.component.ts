import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from '../../Shared/repository.service';
import swal from 'sweetalert';
import { Location } from '@angular/common';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

  public ownerForm: FormGroup;

  constructor(private http: HttpClient, private repository: RepositoryService, private location: Location) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dob: new FormControl(new Date()),
      address: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.repository.create('createOwner', ownerFormValue).subscribe(response => {
        if (response !== null && response !== undefined) {
          swal({
            title: 'Success!',
            text: 'Owner Created!',
            icon: 'success',
          });
        }
        this.location.back();
      }, (err => {
        this.location.back();
      }));
    }
  }


}
