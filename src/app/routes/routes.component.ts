import { DigitransitService } from './../services/digitransit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  private dataInfo: any;

  constructor(private digitransit: DigitransitService) { }

  ngOnInit() {
   /* this.digitransit.getRoutes('E1056')
        .subscribe(
          (res) => {
          this.dataInfo = res.data.stops[0].patterns;
          }
      );*/

      this.digitransit.getFoodFact()
        .subscribe(
          (res) => {
           this.dataInfo = res.text;
           console.log(this.dataInfo);
          }
      );
    }
}
