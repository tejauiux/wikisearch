import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search.component'
import { WikipediaService } from './wikipedia.service';

@NgModule({
  imports: [BrowserModule, JsonpModule],
  declarations: [AppComponent, WikipediaSearchComponent],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/