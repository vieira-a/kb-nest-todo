import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddTaskDTO } from './dto/add-task.dto';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
import { v4 as uuidv4 } from 'uuid';
import { LoadTaskDTO } from './dto/load-task.dto';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskRepository: TaskRepository) {}

  @Post()
  async addTask(@Body() task: AddTaskDTO) {
    
    const newTask = new TaskEntity();
    newTask.id = uuidv4()
    newTask.title = task.title;
    newTask.description = task.description;
    newTask.status = task.status;
    
    this.taskRepository.dbAddTask(newTask);

    return { 
      message: 'Task added successfull', 
      id: newTask.id
    };
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
}
