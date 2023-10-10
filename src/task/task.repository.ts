import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskRepository {
  private tasks: Task[] = [];

  async dbAddTask(task: Task) {
    this.tasks.push(task);
  }

  async dbLoadTask() {
    return this.tasks
  }

  async dbEditTask(taskId: number) {}

}