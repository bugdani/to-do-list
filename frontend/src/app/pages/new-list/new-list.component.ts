import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private todoService: ToDoService, private router: Router) {}

  ngOnInit(): void {}

  createNewList(title: string) {
    this.todoService.createList(title).subscribe((response) => {
      this.router.navigate(['/lists']);
    });
  }
}
