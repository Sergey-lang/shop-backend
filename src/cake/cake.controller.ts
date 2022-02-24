import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CakeService } from './cake.service';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { SearchCakeDto } from './dto/search-cake.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../user/entities/user.entity';
import { CakeEntity } from './entities/cake.entity';

@ApiTags('cake')
@Controller('cakes')
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @Post()
  @ApiBody({ type: CreateCakeDto })
  create(@Body() dto: CreateCakeDto) {
    return this.cakeService.create(dto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all cakes',
    type: [CakeEntity],
  })
  findAll() {
    return this.cakeService.findAll();
  }

  @Get('/popular')
  getPopularPosts() {
    return this.cakeService.popular();
  }

  @Get('/search')
  searchCakes(@Query() dto: SearchCakeDto) {
    return this.cakeService.search(dto);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'get cake by id',
    type: CakeEntity,
  })
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  findOne(@Param('id') id: string) {
    return this.cakeService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateCakeDto })
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    return this.cakeService.update(+id, updateCakeDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  remove(@Param('id') id: string) {
    return this.cakeService.remove(+id);
  }
}
