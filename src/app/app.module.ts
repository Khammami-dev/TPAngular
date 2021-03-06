import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

@NgModule({ // pour dire que cette classe un module angular
// contient enssemble des composants qu'on va utiliser dans ce module là
// dans ce cas on a seulement le composant AppComponent
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardComponent,
    ColorComponent,
    ItemComponent,
    ListComponent,
    CvComponent,
    DetailComponent,
    MiniWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
