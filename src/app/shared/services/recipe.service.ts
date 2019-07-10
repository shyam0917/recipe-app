import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { RecipeConfig } from '../config/recipe.config';

@Injectable()
export class RecipeService {

	constructor(private http:HttpClient) { }


	// get recipe by name
	searchRecipe(){
		return this.http.get(RecipeConfig.SEARCH_API);
	}

	// get top rated recipe
	gettopRecipe(){
		return this.http.get(RecipeConfig.TOP_RATED);
	}

}
