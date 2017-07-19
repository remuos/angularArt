import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles.component';
import { ArticleDetail } from './article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
