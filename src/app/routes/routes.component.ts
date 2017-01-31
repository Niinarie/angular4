import { Response } from '@angular/http';
import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private recipeInfo: any;
  private instructions: any;
  private ingredients: any;
  private summary: any;

  constructor(private digitransit: DigitransitService) { }

  ngOnInit() {

    /*   RANDOM FOOD DACT
        this.digitransit.getFoodFact()
        .subscribe(
          (res) => {
           this.recipeInfo = res.text;
           console.log(this.recipeInfo);
          }
      ); */

      /* RECIPE SUMMARY, NOT GOOD :(
      this.digitransit.getRecipeSummary(621207)
      .subscribe(
        (res) => {
          console.log(res);
        }
      ); */

      // BASIC RECIPE QUERY
      this.digitransit.getRecipeById(841101)
      .subscribe(
        (res) => {
        this.recipeInfo = res;
        this.instructions = res.analyzedInstructions[0].steps;
        this.ingredients = res.extendedIngredients;
        // this.dataInfo.instructions = this.dataInfo.instructions.replace(/(    )([A-z])/g, "\n\n $2");
        console.log(res);


        }
      );
    }
}
