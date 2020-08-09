import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { ViewEventsComponent } from 'src/app/components/view-events/view-events.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/components/verify-email/verify-email.component';
import { EventDeclarationComponent } from 'src/app/components/event-declaration/event-declaration.component';
import { EventDeclarationSecComponent } from 'src/app/components/event-declaration-sec/event-declaration-sec.component';
import { InboxComponent } from 'src/app/components/inbox/inbox.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { AagneyaWelcomeComponent } from 'src/app/components/aagneya-welcome/aagneya-welcome.component';
import { UserWelcomeComponent } from 'src/app/components/user-welcome/user-welcome.component';


// Import canActivate guard services
import { AuthGuard } from "src/app/shared/guard/auth.guard";
import { AuthSecGuard } from "src/app/shared/guard/auth-sec.guard";

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/aagneya-welcome', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [AuthSecGuard]},
  { path: 'sign-up', component: SignUpComponent, canActivate: [AuthSecGuard]},
  { path: 'view-events', component: ViewEventsComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'event-declaration', component: EventDeclarationComponent, canActivate: [AuthGuard]},
  { path: 'event-declaration-sec', component: EventDeclarationSecComponent, canActivate: [AuthGuard]},
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard]},
  { path: 'settings', component: SettingsComponent},
  { path: 'aagneya-welcome', component: AagneyaWelcomeComponent, canActivate: [AuthSecGuard]},
  { path: 'user-welcome', component: UserWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
