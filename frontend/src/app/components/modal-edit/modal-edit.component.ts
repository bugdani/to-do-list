import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() isModalListActive: boolean;
  @Input() isModalTaskActive: boolean;
  @Input() text: string;
  @Input() currentListId: string;
  @Input() taskId: string;
  @Output() closeModalActive = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.isModalListActive = true;
    if (this.text === 'lista') {
    } else {
    }
  }
  closeModal() {
    this.closeModalActive.emit(false);
  }
}
