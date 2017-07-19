import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles.component';
import { ArticleDetail } from './article-detail.component';

import { ArticleService } from './article-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
		  path: 'detail/:id',
		  component: ArticleDetail
		},
    ])
  ],
  providers : [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
