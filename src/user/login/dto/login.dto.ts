import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username must not be empty' })
  username: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  password: string;
}
