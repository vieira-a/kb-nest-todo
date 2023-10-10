import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
import { v4 as uuidv4 } from 'uuid';
import { LoadTaskDTO } from './dto/load-task.dto';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskRepository: TaskRepository) {}

  @Post()
  async addTask(@Body() task: AddTaskDTO): Promise<LoadTaskDTO> {
    
    const newTask = new TaskEntity();
    newTask.id = uuidv4()
    newTask.title = task.title;
    newTask.description = task.description;
    newTask.status = task.status;
    
    await this.taskRepository.dbAddTask(newTask);

    return {
      id: newTask.id,
      title: newTask.title
    }
  }

  @Get()
  async loadTask() {

    const allTasks = await this.taskRepository.dbLoadTask();

    const taskList = allTasks.map(task => new LoadTaskDTO(
      task.id,
      task.title,
    ));

    return taskList;
  }

  @Put('/:id')
  async updateTask(@Param('id') id: string, @Body() taskData: UpdateTaskDTO) {
    const updatedTask = await this.taskRepository.updateTask(id, taskData);
    return updatedTask;
  }
}
