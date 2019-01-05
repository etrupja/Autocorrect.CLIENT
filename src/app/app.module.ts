import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordsComponent } from './components/words/words.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


//services
import {WordService} from './shared/services/word.service'; 
import {AuthenticationService} from './shared/services/auth.service';
import { LicenseService } from './shared/services/license.service';
import { AuthGuard } from './shared/services/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, 
  MatTableModule, MatToolbarModule, MatDialogModule, MatListModule,
MatSortModule, MatPaginatorModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

//components
import { NewEntryComponent } from './components/new-word/new-word.component';
import { UpdateEntryComponent } from './components/update-word/update-word.component';
import { DeleteEntryComponent } from './components/delete-word/delete-word.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Spinner module & Toastr
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { LicenseComponent } from './components/license/license.component';

import { AppRoutes } from "./app.routes";
import { APP_CONFIG, LiveConfig,LocalConfig } from "./shared/app.config";
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    FooterComponent,
    HeaderComponent,
    NewEntryComponent,
    UpdateEntryComponent,
    DeleteEntryComponent,
    RegisterComponent,
    LoginComponent,
    LicenseComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule,
    MatDialogModule, MatListModule, MatSortModule, MatPaginatorModule,
    MatIconModule,
    //spinner
    NgxSpinnerModule, 
    //forms
    ReactiveFormsModule, FormsModule,
    ToastrModule.forRoot(),
    AppRoutes
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [
    { provide: APP_CONFIG, useValue: (environment.production ) ? LiveConfig : LocalConfig },
    WordService, AuthenticationService, LicenseService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
