import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


//services
import {WordService} from './word.service'; 
import {AuthService} from './auth.service';
import { LicenseService } from './license.service';

import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, 
  MatTableModule, MatToolbarModule, MatDialogModule, MatListModule,
MatSortModule, MatPaginatorModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

//components
import { NewEntryComponent } from './new-word/new-word.component';
import { UpdateEntryComponent } from './update-word/update-word.component';
import { DeleteEntryComponent } from './delete-word/delete-word.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

// Spinner module & Toastr
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ng6-toastr-notifications';
import { LicenseComponent } from './license/license.component';

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
    LicenseComponent
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
    AppRouterModule, ToastrModule.forRoot()
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [WordService, AuthService, LicenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
