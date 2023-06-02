import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginData = {
    userName: '',
    password: '',
  };

  constructor(
    private _snack: MatSnackBar,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log('login btn clicked');

    if (
      this.loginData.userName.trim() == '' ||
      this.loginData.userName == null
    ) {
      this._snack.open('Username is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this._snack.open('Password is required !!', '', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        //success
        console.log(data);
        console.log('success');
        //alert('success');
        //Swal.fire('Successfully done','User is registered and id is ' + data.id,'success');
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe((user: any) => {
          this.login.setUser(user);
          console.log(user);
          //redirect ....ADMIN : admin-dashboard
          //redirect ....user : user-dashboard
          if (this.login.getUserRole() == 'librarian') {
            //admin dashboard
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          } else if (this.login.getUserRole() == 'reader') {
            //user-dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user']);
            this.login.loginStatusSubject.next(true);
          } else {
            this.login.logout();
          }
        });
      },
      (error) => {
        //error
        console.log(error);
        console.log('error');
        this._snack.open('Invalid credentials, Try again', '', {
          duration: 3000,
          verticalPosition: 'top',
        });
        //alert('Something went wrong')
        // }
        // );
      }
    );
  }
}
