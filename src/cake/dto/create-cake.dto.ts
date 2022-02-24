import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCakeDto {
  @ApiProperty()
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  title: string;

  @ApiProperty()
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(250, { message: 'Максимум 250 символов' })
  description: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(1000)
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsOptional()
  imgUrl: string;
}
