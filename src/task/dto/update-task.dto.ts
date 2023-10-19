import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Task title',
    example: 'Do something',
  })
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Make it happen',
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'Task status',
    example: `open | doing | done`,
  })
  @IsOptional()
  status: 'open' | 'doing' | 'done';
}
