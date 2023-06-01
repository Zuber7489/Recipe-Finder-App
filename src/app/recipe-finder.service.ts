import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeFinderService {

  constructor(private http:HttpClient) { }

  getRecipes(query: string): Observable<any> {
      return this.http.get<any>(`https://api.edamam.com/search?q=${query}&app_id=ae925588&app_key=aa5470d706e50ea6593b1d1df776c0c8`);
  }
  

}
