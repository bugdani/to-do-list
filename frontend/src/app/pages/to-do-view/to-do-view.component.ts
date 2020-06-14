import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
export class ToDoViewComponent implements OnInit, OnDestroy {
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

  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  //navbar con material
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  fillerNav = Array.from({ length: 3 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({ length: 1 }, () => `Lorem ipsum dolor s.`);

  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
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

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  //Listas y tareas
  onTaskClick(task: Task) {
    this.todoService.complete(task).subscribe((response) => {
      task.completed = !task.completed;
    });
  }

  onDeleteTaskClick(taskId: string) {
    this.todoService
      .deleteTask(this.currentListId, taskId)
      .subscribe((res: any) => {
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
    }
    this.order = value;
  }
}
