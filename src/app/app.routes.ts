import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {AuthCallbackComponent} from './components/auth-callback/auth-callback.component'
import {AuthGuard} from './shared/services/auth-guard.service'
import {WordsComponent} from './components/words/words.component';
import {NewEntryComponent} from './components/new-word/new-word.component';
import {DeleteEntryComponent} from './components/delete-word/delete-word.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { LicenseComponent } from './components/license/license.component';

const routes: Routes = [
    { path: '', component: WordsComponent,canActivate: [AuthGuard] },
    { path: 'home', component: WordsComponent, canActivate: [AuthGuard] },
    { path: 'auth-callback', component: AuthCallbackComponent },
    {path:'', component:WordsComponent},
    {path:'words', component:WordsComponent},
    {path:'new-word', component:NewEntryComponent},
    {path:'delete-word/:wrongWord', component:DeleteEntryComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'license', component:LicenseComponent},
];

export const AppRoutes = RouterModule.forRoot(routes);
