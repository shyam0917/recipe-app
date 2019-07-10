import { Component, OnInit } from '@angular/core';

import {RecipeService} from '../../services/recipe.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers:[RecipeService]
})
export class HomeComponent implements OnInit {
recipeArr=[];

	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
		this.getRecipes();
	}

	getRecipes(){
   this.recipeService.gettopRecipe().subscribe((res)=>{
   	if(res['recipes']){
   	 this.recipeArr=res['recipes'];
   console.log(JSON.stringify(res['recipes']));
}
   },err=>{

   })
	}

}
