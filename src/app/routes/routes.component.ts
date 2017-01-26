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
    this.digitransit.getRoutes('E1056')
        .subscribe(
          (res) => {
          this.dataInfo = res.data.stops[0].patterns;
          console.log(res);
          console.log(res.data.stops);
          console.log(res.data.stops[0].name);
          console.log(res.data.stops[0].patterns);
          }
        );

       
  }

}
