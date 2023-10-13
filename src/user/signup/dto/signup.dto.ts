import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'O nome de usuário não pode ser vazio' })
  username: string;

  @IsEmail({}, { message: 'O e-mail precisa ser válido' })
  email: string;

  @IsString({ message: 'A senha precisa ser informada' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha precisa ser informada' })
  passwordConfirmation: string;
}
