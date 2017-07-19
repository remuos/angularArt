import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { ArticleService } from './article-service.service'

import {Article} from './article';

import 'rxjs/add/operator/switchMap';

 
@Component({
	selector:'article-detail',
	templateUrl:'article-detail.html'
})

export class ArticleDetail implements OnInit{

constructor(
  private articleService: ArticleService,
  private route: ActivatedRoute,
  private location: Location
) {}

	@Input() article : Article ;

ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.articleService.getArticle(+params.get('id')))
    .subscribe(article => this.article = article);
}

goBack(): void {
  this.location.back();
}

}