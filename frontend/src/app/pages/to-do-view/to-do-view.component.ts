import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.scss'],
})
export class ToDoViewComponent implements OnInit {
  currentListId: string;
  lists: List;
  tasks: Task;
  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTasks(params.listId).subscribe((tasks: Task) => {
        this.currentListId = params.listId;
        this.tasks = tasks;
      });
    });
    this.todoService.getLists().subscribe((lists: List) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    this.todoService.complete(task).subscribe((response) => {
      console.log('modificado');
    });
  }
}
