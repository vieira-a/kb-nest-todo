import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'O nome de usuário não pode ser vazio' })
  username: string;

  @IsEmail({}, { message: 'O e-mail precisa ser válido' })
  email: string;

  @IsNotEmpty({ message: 'A senha precisa ser informada' })
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha precisa ser informada' })
  passwordConfirmation: string;
}
