import { Ingredient } from "../common/Ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService{

    private ingredients:Ingredient[]=[
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
      ];

      onIngredientsChanged = new EventEmitter<Ingredient[]>();

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredients(ingredient:Ingredient){
          this.ingredients.push(ingredient);
          console.log(this.ingredients);
          this.onIngredientsChanged.emit(this.ingredients.slice());
      }

      deleteIngredients(ingredient:Ingredient){
        this.ingredients.splice(this.ingredients.indexOf(ingredient),1);
        console.log(this.ingredients);
        this.onIngredientsChanged.emit(this.ingredients.slice());
      }

      resetIngredients(){
        this.ingredients = [];
        console.log(this.ingredients);
        this.onIngredientsChanged.emit(this.ingredients.slice());
    }

    updateIngredients(ingredients:Ingredient[]){console.log(ingredients);
        this.ingredients.push(...ingredients);
        console.log(this.ingredients);
        this.onIngredientsChanged.emit(this.ingredients.slice());
    }
    
}