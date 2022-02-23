import { IsEmail, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail(undefined, { message: 'Неверный email' })
  email: string;
  @Length(6, 32, { message: 'Минимум 6 символов' })
  password?: string;
}
