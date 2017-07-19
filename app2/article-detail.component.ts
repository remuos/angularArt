import { Component ,Input} from '@angular/core';

import {Article} from './article';

 
@Component({
	selector:'article-detail',
	templateUrl:'article-detail.html'
})

export class ArticleDetail{

	@Input() article : Article ;

}