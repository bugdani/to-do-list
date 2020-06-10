import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private todoService: ToDoService) {}

  ngOnInit(): void {}

  createNewList(title: string) {
    this.todoService.createList(title).subscribe((response) => {
      console.log(response);
    });
  }
}
