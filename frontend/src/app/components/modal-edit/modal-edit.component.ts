import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

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

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.isModalListActive = true;
  }

  updateTitle(titleInput: string) {
    if (this.text === 'lista') {
      this.todoService
        .updateList(this.currentListId, titleInput)
        .subscribe((respuesta) => {});
    } else {
      this.todoService
        .updateTask(this.currentListId, this.taskId, titleInput)
        .subscribe((respuesta) => {});
    }
    this.closeModalActive.emit(false);
  }

  closeModal() {
    this.closeModalActive.emit(false);
  }
}
