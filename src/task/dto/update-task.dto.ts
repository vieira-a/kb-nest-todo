import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDTO {
  @ApiProperty({
    description: 'Task title',
    example: 'Do something'
  })
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Make it happen'
  })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'Task status',
    example: `open | doing | done`
  })
  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  @IsOptional()
  status: 'open' | 'doing' | 'done';
}
