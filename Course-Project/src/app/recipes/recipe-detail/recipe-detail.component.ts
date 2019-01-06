import { Component, OnInit,
  // Input 
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id:number;

  // @Input() recipe:Recipe;
 recipe:Recipe;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.recipe=this.recipeService.getRecipes(this.id);
    })
  }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //both the below lines do the same, the 2nd one provides a view at how complex routes can be built
    
    //this.router.navigate(['edit'],{relativeTo:this.route});
  
    this.router.navigate(['../', this.id, 'edit'],{relativeTo:this.route});
  }

}
