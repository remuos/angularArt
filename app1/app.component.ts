import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-default navbar-static-top">
				  <ul class="nav navbar-nav"> 
					  <li class="active"><a href="#">Home</a></li> 
					  <li><a routerLink="/articles">Articles</a></li> 
				  </ul>
			</nav>
   
   <router-outlet></router-outlet>`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article Application';
}
