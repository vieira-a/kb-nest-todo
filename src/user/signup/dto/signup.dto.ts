import { IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'O nome de usuário não pode ser vazio' })
  username: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  email: string;

  @IsNotEmpty({ message: 'A senha precisa ser informada' })
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha precisa ser informada' })
  passwordConfirmation: string;
}
