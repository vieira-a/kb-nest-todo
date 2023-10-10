import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { TaskRepository } from './task.repository';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskRepository: TaskRepository) {}

  @Post()
  async addTask(@Body() task: AddTaskDTO) {
    this.taskRepository.dbAddTask(task);
    return { message: 'Task added successfull' };
  }

  @Get()
  async loadTask() {
    const taskList = this.taskRepository.dbLoadTask();
    return taskList;
  }
}
