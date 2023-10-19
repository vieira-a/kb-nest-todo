import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Name must not be empty' })
  @IsString({ message: 'Name must be valid characters' })
  @MinLength(3, { message: 'Name must have 3 or more characters' })
  name: string;

  @IsNotEmpty({ message: 'Username must not be empty' })
  username: string;

  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Must be a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  @IsStrongPassword({}, { message: 'Password must meet complexity criteria' })
  password: string;

  @IsNotEmpty({ message: 'Password confirmation must not be empty' })
  @IsStrongPassword(
    {},
    {
      message: 'Password confirmation must meet complexity criteria',
    },
  )
  passwordConfirmation: string;
}
