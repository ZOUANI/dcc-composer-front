import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestCollectionCreateComponent } from './requestCollection/request-collection-create/request-collection-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RequestCollectionLaunchComponent } from './requestCollection/request-collection-launch/request-collection-launch.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    RequestCollectionCreateComponent,
    RequestCollectionLaunchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
