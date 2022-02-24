import {
  IsEmail,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  // Moderator = 'Moderator',
  User = 'Client',
}

export class CreateUserDto {
  @ApiProperty()
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  firstName: string;

  @ApiProperty()
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  lastName: string;

  @ApiProperty({
    required: false,
    enum: UserRole,
  })
  @IsString()
  role?: string;

  @ApiProperty()
  @IsEmail(undefined, { message: 'Неверный email' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такой email уже существует',
  })
  email: string;

  @ApiProperty({
    required: false,
  })
  @Length(6, 32, { message: 'Пароль минимум 6 символов' })
  password?: string;
}
