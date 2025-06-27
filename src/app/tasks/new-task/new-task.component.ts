import { Component, EventEmitter, inject, Output, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private tasksService = inject(TasksService);





  enteredTitle = (' ');
  enteredSummary = (' ');
  enteredDate = (' ');

  @Input({ required: true }) userId!: string;

  @Output() close = new EventEmitter()




  onCloseAddTask() {
    this.close.emit();
  }

  onSubmit() {

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,


    },
      this.userId
    );
    this.close.emit();

  }

}
