import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { GetAgeContactComponent } from './get-age-contact/get-age-contact.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListArticleContactComponent } from './list-article-contact/list-article-contact.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    GetContactsComponent,
    GetContactComponent,
    CreateContactComponent,
    UpdateContactComponent,
    GetAgeContactComponent,
    AuthentificationComponent,
    ListArticleContactComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
