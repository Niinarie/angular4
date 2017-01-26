import { DigitransitService } from './services/digitransit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
