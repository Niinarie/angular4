import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {
    private transitUrl: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
    private foodUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random';

  constructor(private http:Http) { }

  getFoodFact = () => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.foodUrl, options).map(resp => resp.json());
     }

  getRecipeById = (id: number) => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information';

    return this.http.get(recipeUrl, options).map(resp => resp.json());
  }

  getRecipeSummary = (id: number) => {
    let headers = new Headers({ 'Accept': 'application/json', 'X-Mashape-Key': '4QehuLvcO0mshaMAE6nXERhX6id7p1lmS1rjsnVbsumPbznDZR' });
    let options = new RequestOptions({ headers: headers });

    let recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/summary';

    return this.http.get(recipeUrl, options).map(resp => resp.json());
  }

  getRoutes = (stopName: string) => {
    let headers = new Headers({ 'Content-Type': 'application/graphql' });
    let options = new RequestOptions({ headers: headers });

    let data: string = `{
  stops(name: "${stopName}") {
    name
    patterns {
      name
    }
  }
}`;

      return this.http.post(this.transitUrl, data, options)
      .map(resp => resp);
  }
}
