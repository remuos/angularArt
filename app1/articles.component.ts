import { Component, Input } from '@angular/core';

import { ArticleService } from './article-service.service'


import {Article} from './article';
import { ARTICLES } from './mock-articles';


@Component({
	selector : 'lists-articles',
	templateUrl : 'articles.component.html',

	providers : [ArticleService]
})

export class ArticlesComponent {

	articles : Article[] = [] ;
	selectedArticle :Article ;

	constructor(private articleService : ArticleService){}


getArticles():void{
	this.articleService.getArticles().then(articles => this.articles = articles);
}
	
ngOnInit(): void{

	this.getArticles()

}
onSelect(article: Article): void {
	//alert("ok");
    this.selectedArticle = article;
  }




}