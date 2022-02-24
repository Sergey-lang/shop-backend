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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CakeEntity } from './entities/cake.entity';

@ApiTags('cake')
@Controller('cakes')
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @ApiOperation({ summary: 'Create cake' })
  @ApiBody({ type: CreateCakeDto })
  @Post()
  create(@Body() dto: CreateCakeDto) {
    return this.cakeService.create(dto);
  }

  @ApiOperation({ summary: 'Get all cakes' })
  @ApiResponse({
    status: 200,
    type: [CakeEntity],
  })
  @Get()
  findAll() {
    return this.cakeService.findAll();
  }

  @ApiOperation({ summary: 'Get popular cakes' })
  @Get('/popular')
  getPopularPosts() {
    return this.cakeService.popular();
  }

  @ApiOperation({ summary: 'Search cakes' })
  @Get('/search')
  searchCakes(@Query() dto: SearchCakeDto) {
    return this.cakeService.search(dto);
  }

  @ApiOperation({ summary: 'Get one cake' })
  @ApiResponse({
    status: 200,
    type: CakeEntity,
  })
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cakeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one cake' })
  @ApiBody({ type: UpdateCakeDto })
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    return this.cakeService.update(+id, updateCakeDto);
  }

  @ApiOperation({ summary: 'Delete one cake' })
  @ApiResponse({
    status: 404,
    description: 'Товар c id% не найден',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cakeService.remove(+id);
  }
}
