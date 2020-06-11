import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoViewComponent } from './pages/to-do-view/to-do-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: ToDoViewComponent },
  { path: 'lists/:listId', component: ToDoViewComponent },
  { path: 'new-list', component: NewListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
