import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoViewComponent } from './pages/to-do-view/to-do-view.component';

//Servicios
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ToDoViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
