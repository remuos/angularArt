import {Injectable } from '@angular/core';

import { Article } from './article';
import { ARTICLES } from './mock-articles';


@Injectable()

export class ArticleService{


	getArticles(): Promise<Article[]> {
		return Promise.resolve(ARTICLES) ;
	}
getArticle(id: number): Promise<Article> {
  return this.getArticles()
             .then(articles => articles.find(article => article.id_art === id));
}
	/*getArticlesSlowly():Promise<Article[]>{
		return new Promise(resolve =>{
			setTimeout(()=>resolve(this.getArticles()),2000))

		});
	}*/
}