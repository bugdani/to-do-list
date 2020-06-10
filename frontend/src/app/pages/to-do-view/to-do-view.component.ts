import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.scss'],
})
export class ToDoViewComponent implements OnInit {
  lists: any;
  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
    this.todoService.getLists().subscribe((lists: any[]) => {
      this.lists = lists;
    });
  }
}
