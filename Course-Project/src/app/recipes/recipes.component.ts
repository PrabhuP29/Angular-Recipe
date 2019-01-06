import {Component} from '@angular/core'
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector:'app-recipes',
    templateUrl:'recipes.component.html',
    providers:[RecipeService]
})
export class RecipesComponent{
    recipe:Recipe;

    constructor(private recipeService:RecipeService){}

    ngOnInit(){
        this.recipeService.onRecipeSelected.subscribe(
            (eventData:Recipe) => {console.log(this);
                this.recipe = eventData;
                console.log(this.recipe.name);
            }
        );
    }

    // onClicked(eventData:Recipe){console.log(this);
    //     this.recipe = eventData;
    //     console.log(this.recipe.name);
    //   }
    
}