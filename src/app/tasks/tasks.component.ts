import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name?: string;

  constructor(private tasksService: TasksService) {

  }


  isAddingTask = false;


  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);

  }


  onCompleteTask(id: string) {
    return this.tasksService.removeTask(id);
  }



  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: newTaskData) {
    this.tasksService.addTask(taskData, this.userId)
    this.isAddingTask = false;

  }

}
