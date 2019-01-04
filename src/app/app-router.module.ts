import {RouterModule, Routes} from '@angular/router';

//component
import {WordsComponent} from './words/words.component';
import {NewEntryComponent} from './new-word/new-word.component';
import {DeleteEntryComponent} from './delete-word/delete-word.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

import { NgModule } from '@angular/core';
import { LicenseComponent } from './license/license.component';


//route
const routes:Routes = [
    {path:'', component:WordsComponent},
    {path:'words', component:WordsComponent},
    {path:'new-word', component:NewEntryComponent},
    {path:'delete-word/:wrongWord', component:DeleteEntryComponent},
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path:'license', component:LicenseComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}