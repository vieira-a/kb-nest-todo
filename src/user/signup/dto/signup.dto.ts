import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'O nome precisa ser informado' })
  @IsString({ message: 'O nome deve conter caracteres válidos' })
  @MinLength(3, { message: 'O nome deve possuir mais de 3 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'O nome de usuário precisa ser informado' })
  username: string;

  @IsNotEmpty({ message: 'O e-mail precisa ser informado' })
  @IsEmail({}, { message: 'O e-mail precisa ser válido' })
  email: string;

  @IsNotEmpty({ message: 'A senha precisa ser informada' })
  @IsStrongPassword(
    {},
    { message: 'A senha deve obedecer a critérios de complexidade' },
  )
  password: string;

  @IsNotEmpty({ message: 'A confirmação de senha precisa ser informada' })
  @IsStrongPassword(
    {},
    {
      message:
        'A confirmação de senha deve obedecer a critérios de complexidade',
    },
  )
  passwordConfirmation: string;
}
