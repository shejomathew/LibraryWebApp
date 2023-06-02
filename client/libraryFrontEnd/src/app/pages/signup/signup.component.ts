import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isEditable = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private userSevice: UserService,
    private _snack: MatSnackBar
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    },
    phone: '',
    role: {
      id: 0,
      roleName: '',
    },
  };

  public roles = {
    value1: 'librarian',
    value2: 'reader',
  };

  ngOnInit(): void {}

  roleSelection(event: any) {
    console.log(event);
    this.user.role.roleName = event.value;
  }

  formSubmit() {
    console.log(this.user);

    this.Validation();
    this.user.email = this.user.username;
    if (this.user.role.roleName == 'librarian') this.user.role.id = 1;
    else this.user.role.id = 2;

    this.userSevice.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire(
          'Successfully done',
          'User is registered and id is ' + data.id,
          'success'
        );

        alert('success');
      },
      (error) => {
        console.log(error);
        this._snack.open('Something went wrong', '', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    );
  }

  Validation() {
    if (this.user.username == '' || this.user.username == null) {
      this._snack.open('Username is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      this._snack.open('Password is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (this.user.firstName == '' || this.user.firstName == null) {
      this._snack.open('First Name is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (this.user.lastName == '' || this.user.lastName == null) {
      this._snack.open('Last Name is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (this.user.email == '' || this.user.email == null) {
      this._snack.open('Email is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (this.user.phone == '' || this.user.phone == null) {
      this._snack.open('Phone Number is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
  }
}
