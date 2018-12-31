import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


//services
import {WordService} from './word.service'; 
import {AuthService} from './auth.service';

import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, 
  MatTableModule, MatToolbarModule, MatDialogModule, MatListModule,
MatSortModule, MatPaginatorModule, MatIconModule} from '@angular/material';

//components
import { NewEntryComponent } from './new-word/new-word.component';
import { UpdateEntryComponent } from './update-word/update-word.component';
import { DeleteEntryComponent } from './delete-word/delete-word.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';



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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule,
    MatDialogModule, MatListModule, MatSortModule, MatPaginatorModule,
    MatIconModule,

    ReactiveFormsModule, FormsModule,
    AppRouterModule
  ],
  entryComponents:[UpdateEntryComponent],
  providers: [WordService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
