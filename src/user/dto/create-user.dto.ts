import {
  IsEmail,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  firstName: string;

  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  lastName: string;

  @IsString()
  role: string;

  @IsEmail(undefined, { message: 'Неверный email' })
  email?: string;

  @Length(6, 32, { message: 'Минимум 6 символов' })
  password?: string;
}
