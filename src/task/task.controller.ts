import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
import { v4 as uuidv4 } from 'uuid';
import { LoadTaskDTO } from './dto/load-task.dto';
import { TaskService } from './task.service';

@Controller('/task')
export class TaskController {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskService: TaskService
  ) {}

  @Post()
  async addTask(@Body() task: AddTaskDTO) {
    
    const newTask = new TaskEntity();
    newTask.title = task.title;
    newTask.description = task.description;
    newTask.status = task.status;

    await this.taskService.dbAddTask(newTask)

    return {
      message: 'Task created'
    }
  }

  @Get()
  async loadTasks() {
    return this.taskService.dbLoadTasks();
  }

  @Put('/:id')
  async updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDTO) {
    console.log('taskData', id, taskData)
    await this.taskService.dbUpdateTask(id, taskData);
    return {
      message: 'Task updated'
    }
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string) {
    await this.taskService.dbDeleteTask(id)
    return {
      message: 'Task removed'
    }
  }
}
