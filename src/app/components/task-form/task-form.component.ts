import { Component,OnInit } from '@angular/core';
import { TaskService } from '../../services/task.services';
import { Task } from '../../models/task.models';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  // task: Task = { id: 0, title: '', isCompleted: false };
  task: Task = { id: 0, title: '', description: '' };
/**
 *
 */
constructor( private taskService: TaskService,
  private router: Router,
  private route: ActivatedRoute) {  
}
ngOninit(){
  const id = this.route.snapshot.params['id'];
  console.log('id='+id);
    if (id) {
      this.taskService.getTaskById(id).subscribe(task => this.task = task);
}}
saveTask(): void {
  if (this.task.id) {
    this.taskService.updateTask(this.task).subscribe(() => this.router.navigate(['/']));
  } else {
    this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/']));
  }
}
}
