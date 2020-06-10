import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.scss'],
})
export class ToDoViewComponent implements OnInit {
  constructor(private todoService: ToDoService) {}

  ngOnInit() {}

  createNewList(title: string) {
    this.todoService
      .createList('Lista creada desde front')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
