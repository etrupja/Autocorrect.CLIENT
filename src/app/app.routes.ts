import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component'
import {AuthGuard} from './shared/services/auth-guard.service'
import {WordsComponent} from './components/words/words.component';
import {NewEntryComponent} from './components/new-word/new-word.component';
import {DeleteEntryComponent} from './components/delete-word/delete-word.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { NewLicenseComponent } from './components/newlicense/newlicense.component';
import {LoggedOutComponent} from './components/logged-out/logged-out.component';
import { LicensesComponent } from './components/licenses/licenses.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'auth-callback', component: AuthCallbackComponent },
    { path: 'logged-out', component: LoggedOutComponent },
    {path:'', component:WordsComponent, canActivate: [AuthGuard]},
    // {path:'words', component:WordsComponent, canActivate: [AuthGuard]},
    // {path:'new-word', component:NewEntryComponent, canActivate: [AuthGuard]},
    // {path:'delete-word/:wrongWord', component:DeleteEntryComponent, canActivate: [AuthGuard]},
    // {path:'register', component:RegisterComponent, canActivate: [AuthGuard]},
    // {path:'login', component:LoginComponent, canActivate: [AuthGuard]},
    {path:'new-license', component:NewLicenseComponent, canActivate: [AuthGuard]},
    {path:'licenses', component:LicensesComponent, canActivate: [AuthGuard]},
];

export const AppRoutes = RouterModule.forRoot(routes);
