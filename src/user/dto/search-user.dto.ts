import { ApiProperty } from '@nestjs/swagger';

export class SearchUserDto {
  @ApiProperty({
    required: false,
  })
  email?: string;

  @ApiProperty({
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
  })
  limit?: number;

  @ApiProperty({
    required: false,
  })
  take?: number;
}
