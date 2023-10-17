import { IsString } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'O nome de usuário deve ser informado' })
  username: string;

  @IsString({ message: 'A senha do usuário deve ser informada' })
  password: string;
}
