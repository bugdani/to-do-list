import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoViewComponent } from './pages/to-do-view/to-do-view.component';

//Servicios
import { HttpClientModule } from '@angular/common/http';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { NgpSortModule } from 'ngp-sort-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DifferenceDaysPipe } from './pipes/difference-days.pipe';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Sidebar Material
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from '../app/material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ToDoViewComponent,
    NewListComponent,
    NewTaskComponent,
    ModalEditComponent,
    DifferenceDaysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgpSortModule,
    OrderModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    MatNativeDateModule,
    DemoMaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
