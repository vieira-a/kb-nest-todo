import { IsNotEmpty } from 'class-validator';

export class AddTaskDTO {
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  title: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @IsNotEmpty({ message: 'O status não pode ser vazio' })
  status: 'open' | 'doing' | 'done';
}
