import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../common/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("inputName") inputNameRef:ElementRef;
  @ViewChild("inputAmount") inputAmountRef:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onItemAdded(){
    this.shoppingListService.addIngredients(new Ingredient
      (this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value));
  } 

  onItemDeleted(){
    this.shoppingListService.deleteIngredients(new Ingredient
      (this.inputNameRef.nativeElement.value, this.inputAmountRef.nativeElement.value));
  }

  onReset(){
    this.shoppingListService.resetIngredients();
  }

}
