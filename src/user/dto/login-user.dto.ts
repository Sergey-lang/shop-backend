import { IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsEmail(undefined, { message: 'Неверный email' })
  email: string;

  @ApiProperty({
    required: false,
  })
  @Length(6, 32, { message: 'Минимум 6 символов' })
  password?: string;
}
