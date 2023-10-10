import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTaskDTO {
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  @IsOptional()
  title: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  @IsOptional()
  description: string;

  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  @IsOptional()
  status: 'open' | 'doing' | 'done';
}
