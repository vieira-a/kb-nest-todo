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

  async updateTask(id: string, taskData: Partial<TaskEntity>) {
    const task = this.tasks.find(taskItem => taskItem.id === id);
    if (!task) {
      throw new Error('Task does not exists');
    }

    Object.entries(taskData).forEach(([key, value]) => {
      if(key === 'id') {
        return;
      }
      task[key] = value;
    })
    return task;
  }
}
