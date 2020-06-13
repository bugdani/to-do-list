import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.scss'],
})
export class ToDoViewComponent implements OnInit {
  currentListId: string;
  taskId: string;
  isModalListActive: boolean = false;
  isModalTaskActive: boolean = false;
  textForModal: string;
  lists: List[];
  tasks: Task[];
  order: string = 'task.title';
  reverse: boolean = false;
  sortedCollection: Task[];

  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe
  ) {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        this.currentListId = params.listId;
        this.tasks = tasks;
      });
    });
    this.todoService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });

    this.sortedCollection = orderPipe.transform(this.tasks, 'title');
    console.log(this.sortedCollection);
  }

  ngOnInit() {
    /*
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        this.currentListId = params.listId;
        this.tasks = tasks;
      });
    });
    this.todoService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
*/
  }

  onTaskClick(task: Task) {
    this.todoService.complete(task).subscribe((response) => {
      task.completed = !task.completed;
    });
  }

  onDeleteTaskClick(taskId: string) {
    this.todoService
      .deleteTask(this.currentListId, taskId)
      .subscribe((res: any) => {
        //this.router.navigate(['/lists', this.currentListId]);
        this.tasks = this.tasks.filter((val) => val._id !== taskId);
      });
  }

  onDeleteListClick() {
    this.todoService.deleteList(this.currentListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
    });
  }

  toggleModalList() {
    this.textForModal = 'lista';
    this.isModalListActive = !this.isModalListActive;
  }

  toggleModalTask(taskId: string) {
    this.taskId = taskId;
    this.textForModal = 'tarea';
    this.isModalListActive = !this.isModalListActive;
  }

  closeModal(e: any) {
    this.isModalListActive = e;
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
      console.log('ENTRE A if (this.order === value)');
      console.log(this.reverse);
    }
    this.order = value;
  }
}
