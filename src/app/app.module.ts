import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { EventDeclarationComponent } from './components/event-declaration/event-declaration.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AagneyaWelcomeComponent } from './components/aagneya-welcome/aagneya-welcome.component';
import { UserWelcomeComponent } from './components/user-welcome/user-welcome.component';
import { EventDeclarationSecComponent } from './components/event-declaration-sec/event-declaration-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    NavbarComponent,
    ViewEventsComponent,
    ForgotPasswordComponent,
    EventDeclarationComponent,
    InboxComponent,
    SettingsComponent,
    AagneyaWelcomeComponent,
    UserWelcomeComponent,
    EventDeclarationSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }




