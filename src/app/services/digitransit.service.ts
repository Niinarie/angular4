import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {
    private transitUrl: string = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';


  constructor(private http:Http) { }

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
      .map(resp => resp.json());

      /*this.http.post(this.transitUrl, data, options).subscribe((res: Response) => {
       const stopInfo = res.json();
       return stopInfo;
     }); */


  }
}
