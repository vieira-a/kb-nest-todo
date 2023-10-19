import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ProfileModule } from '../user/profile/profile.module';

@Module({
  imports: [
    ProfileModule,
    TypeOrmModule.forFeature([TaskEntity])
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
