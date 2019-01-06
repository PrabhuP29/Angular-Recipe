import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics-Course-Project';

  isRecipeClicked:boolean = true;

  onPageClicked(pageData:string){
    if(pageData == "recipe"){
      this.isRecipeClicked = true;
    } else{
      this.isRecipeClicked = false;
    }
  }
}
