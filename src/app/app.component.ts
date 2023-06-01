import { Component } from '@angular/core';
import { RecipeFinderService } from './recipe-finder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  data:any;
  recipevalue:any;
  showFullText:boolean=false;
 constructor(public recipeservice:RecipeFinderService){}

ngOnInit(){
  
}

 searchrecipe(query:any){
  this.recipeservice.getRecipes(query).subscribe(res=>{
console.log(res)
this.data=res;
  })
 }
  
 toggleShowFullText(){
  this.showFullText=!this.showFullText;
 }

}
