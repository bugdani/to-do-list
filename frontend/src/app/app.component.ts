import { Component } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  currentListId: string;
  lists: List[];
  textForModal: string;
  isModalListActive: boolean = false;
  _opened: boolean = false;
  _modeNum: number = 0;
  _positionNum: number = 0;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = false;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = null;
  _autoCollapseWidth: number = null;

  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  router: any;
  constructor(private todoService: ToDoService) {
    this.todoService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onDeleteListClick() {
    console.log(`entre eliminar lista`);

    this.todoService.deleteList(this.currentListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
    });
  }

  toggleModalList() {
    console.log(`entre modificar lista`);
    this.textForModal = 'lista';
    this.isModalListActive = !this.isModalListActive;
  }

  _toggleOpened(): void {
    this._opened = !this._opened;
  }

  _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }
}
