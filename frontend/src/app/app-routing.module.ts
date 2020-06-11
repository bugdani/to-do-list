import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoViewComponent } from './pages/to-do-view/to-do-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: ToDoViewComponent },
  { path: 'lists/:listId', component: ToDoViewComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'new-task', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
