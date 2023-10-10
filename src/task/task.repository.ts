import { Injectable } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { Task } from './task.model';

@Injectable()
export class TaskRepository {
  private tasks: Task[] = [];

  async dbAddTask(task: AddTaskDTO) {
    this.tasks.push(task);
  }

  async dbLoadTask() {
    return this.tasks;
  }
}
