import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateCakeDto {
  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(50, { message: 'Максимум 50 символов' })
  title: string;

  @MinLength(2, { message: 'Минимум 2 символа' })
  @MaxLength(250, { message: 'Максимум 250 символов' })
  description: string;

  @IsInt()
  @Min(0)
  @Max(1000)
  price: number;

  @IsNotEmpty()
  type: string;

  @IsOptional()
  imgUrl: string;
}
