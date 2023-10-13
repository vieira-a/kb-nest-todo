import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddTaskDTO {
  @ApiProperty({
    description: 'Task title',
    example: 'Do something',
  })
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Make it happen',
  })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @ApiProperty({
    description: 'Task status',
    example: `open | doing | done`,
  })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: 'open' | 'doing' | 'done';
}
