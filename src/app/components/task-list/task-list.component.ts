import { Component,OnInit } from '@angular/core';
import {RouterLink} from '@angular/router'
import {TaskService} from '../../services/task.services';
import {Task} from '../../models/task.models'
import {ToastrService} from 'ngx-toastr'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
tasks: Task[]=[];
/**
 *
 */
constructor(private taskService:TaskService, private toastr:ToastrService) {}
ngOnInit():void{  this.loadTasks();}

loadTasks(): void {
  this.taskService.getTasks().subscribe({
    next: (data) => this.tasks = data,
    error: () => this.toastr.error('Failed to load tasks')
  });
}

deleteTask(id: number): void {
  if (confirm('Are you sure you want to delete this task?')) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.toastr.success('Task deleted successfully');
      },
      error: () => this.toastr.error('Failed to delete task')
    });
  }
}
}
