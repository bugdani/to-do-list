import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoViewComponent } from './pages/to-do-view/to-do-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: ToDoViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
