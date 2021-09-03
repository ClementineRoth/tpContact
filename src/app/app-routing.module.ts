import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { GetAgeContactComponent } from './get-age-contact/get-age-contact.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { ListArticleContactComponent } from './list-article-contact/list-article-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {path:"contact/get", component: GetContactsComponent},
  {path:"contact/getOne", component: GetContactComponent},
  {path:"contact/Inscription", component: CreateContactComponent},
  {path:"contact/update", component: UpdateContactComponent},
  {path:"contact/getAge", component: GetAgeContactComponent},
  {path:"contact/Connexion", component: AuthentificationComponent},
  {path:"Article/liste", component: ListArticleContactComponent},
  {path:"", component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
