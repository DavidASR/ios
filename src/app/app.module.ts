import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './p/header/header.component';
import { FooterComponent } from './p/footer/footer.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




// import { LoginComponent } from './v/login/login.component';
// import { DashComponent } from './v/dash/dash.component';
// import { NuevoComponent } from './v/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    // LoginComponent,
    // DashComponent,
    // NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
