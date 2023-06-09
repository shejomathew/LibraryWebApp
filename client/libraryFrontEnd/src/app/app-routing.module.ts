import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddBookComponent } from './pages/admin/add-book/add-book.component';
import { UpdateBookComponent } from './pages/admin/update-book/update-book.component';
import { ViewBookComponent } from './pages/admin/view-book/view-book.component';
import { RemoveBookComponent } from './pages/admin/remove-book/remove-book.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UserBooksComponent } from './pages/user/user-books/user-books.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      { path: '', component: UserWelcomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user-books', component: UserBooksComponent },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'update-book', component: UpdateBookComponent },
      { path: 'view-book', component: ViewBookComponent },
      { path: 'remove-book', component: RemoveBookComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
