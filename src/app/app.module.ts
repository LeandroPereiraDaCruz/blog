import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { LinkRedesSociaisComponent } from './link-redes-sociais/link-redes-sociais.component';
import { FacebookModule } from 'ngx-facebook';
import { SafeHtmlPipe } from './util/pipe.safehtml';
import { ApiserverService } from './apiserver.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './top-menu/top-menu.component';



const appRoute: Routes = [
    { path: '', component: PostsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'post/:id', component: PostComponent},
    { path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent,
    PostComponent,
    LinkRedesSociaisComponent,
    SafeHtmlPipe,
    NotfoundComponent,
    FooterComponent,
    HeaderComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute, {useHash: true}),
    FacebookModule.forRoot(),
    HttpModule
  ],
  providers: [ApiserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
