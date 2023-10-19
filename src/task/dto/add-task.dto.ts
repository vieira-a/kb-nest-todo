import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddTaskDTO {
  @ApiProperty({
    description: 'Task title',
    example: 'Do something',
  })
  @IsNotEmpty({ message: 'Task title must not be empty' })
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Make it happen',
  })
  @IsNotEmpty({ message: 'Task description must not be empty' })
  description: string;

  @ApiProperty({
    description: 'Task status',
    example: `open | doing | done`,
  })
  @IsNotEmpty({ message: 'Task status must not be empty' })
  status: 'open' | 'doing' | 'done';
}
