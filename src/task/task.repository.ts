import { Injectable } from '@nestjs/common';
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

  private dbLoadTaskById(id: string) {
    const taskById = this.tasks.find((taskItem) => taskItem.id === id);
    if (!taskById) {
      throw new Error('Task does not exists');
    }
    return taskById;
  }

  async dbUpdateTask(id: string, taskData: Partial<TaskEntity>) {
    const task = this.dbLoadTaskById(id);

    Object.entries(taskData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      task[key] = value;
    });
    return task;
  }

  async dbDeleteTask(id: string) {
    const task = this.tasks.find((taskItem) => taskItem.id === id);
    if (!task) {
      throw new Error('Task does not exists');
    }
    this.tasks = this.tasks.filter((tasksItems) => tasksItems.id != id);
    return task;
  }
}
