import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { UserRole } from '../../user/entities/user.entity';

export class CreateRoleDto {
  @ApiProperty({
    required: false,
    enum: UserRole,
  })
  value: UserRole;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  descriptions: string;
}
