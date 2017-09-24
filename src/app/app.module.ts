import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LinkRedesSociaisComponent } from './link-redes-sociais/link-redes-sociais.component';
import { PostsComponent } from './posts/posts.component';


const appRoute:Routes = [
    { path: '', component:PostsComponent},
    { path: 'about', component:AboutComponent},
    { path: 'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LinkRedesSociaisComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
