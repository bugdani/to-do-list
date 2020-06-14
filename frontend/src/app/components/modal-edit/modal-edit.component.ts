import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() isModalListActive: boolean;
  @Input() text: string;
  @Input() currentListId: string;
  @Input() taskId: string;
  @Output() closeModalActive = new EventEmitter();

  constructor(private todoService: ToDoService, private router: Router) {}

  ngOnInit() {
    this.isModalListActive = true;
  }

  updateTitle(titleInput: string) {
    if (this.text === 'lista') {
      this.todoService
        .updateList(this.currentListId, titleInput)
        .subscribe((response) => {
          this.router.navigate(['/lists', response['_id']]);
        });
    } else {
      this.todoService
        .updateTask(this.currentListId, this.taskId, titleInput)
        .subscribe((response) => {
          this.router.navigate(['/lists', response['_listId']]);
        });
    }
    this.closeModalActive.emit(false);
  }

  closeModal() {
    this.closeModalActive.emit(false);
  }
}
