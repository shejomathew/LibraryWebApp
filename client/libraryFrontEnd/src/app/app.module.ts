import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddBookComponent } from './pages/admin/add-book/add-book.component';
import { UpdateBookComponent } from './pages/admin/update-book/update-book.component';
import { RemoveBookComponent } from './pages/admin/remove-book/remove-book.component';
import { ViewBookComponent } from './pages/admin/view-book/view-book.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserBooksComponent } from './pages/user/user-books/user-books.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddBookComponent,
    UpdateBookComponent,
    RemoveBookComponent,
    ViewBookComponent,
    UserWelcomeComponent,
    UserSidebarComponent,
    UserBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // ToastrModule.forRoot(), // for notification
    //
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
