import { IsEmail, Length, MaxLength, MinLength } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity, UserRole } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'David', description: 'User first name' })
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  firstName: string;

  @ApiProperty({ example: 'Mitch', description: 'User last name' })
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  lastName: string;

  @ApiProperty({
    example: 'user@mail.ru',
    description: 'User uniq email address',
  })
  @IsEmail(undefined, { message: 'Неверный email' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такой email уже существует',
  })
  email: string;

  @ApiProperty({
    required: true,
    example: 'ADMIN',
    description: 'User role type',
    enum: UserRole,
  })
  role: UserRole;

  @ApiProperty({
    required: false,
    example: '123456',
    description: 'User uniq password',
  })
  @Length(6, 32, { message: 'Пароль минимум 6 символов' })
  password?: string;
}
