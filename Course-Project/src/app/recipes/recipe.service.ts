import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../common/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  onRecipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [new Recipe('Test Recipe 1', 'This is the description of the Recipe 1',
  'http://www.happilyunprocessed.com/wp-content/uploads/2016/11/chickenpiccata3pic.jpg',
  [new Ingredient("Chicken",1),new Ingredient("Potato", 1)]),
  new Recipe('Test Recipe 2', 'This is the description of the Recipe 2',
  'https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/40/49/7/iUlxb54sSWaD9Zp44kfP_FGgWFV4mSVq8aISp1eQG_baked%20wings%20(1%20of%204).jpg',
  [new Ingredient("Chicken Wings",10),new Ingredient("French Fries", 20)])];

  constructor(private shoppingListService:ShoppingListService){

  }

  getRecipe(){
      return this.recipes.slice();
  }

  getRecipes(index:number){
    return this.recipes[index];
}

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.updateIngredients(ingredients);
  }

}