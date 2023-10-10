import { Injectable } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskRepository {
  private tasks: TaskEntity[] = [];

  async dbAddTask(task: TaskEntity) {
    this.tasks.push(task);
  }

  async dbLoadTask() {
    return this.tasks;
  }
}
