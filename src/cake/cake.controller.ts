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

@Controller('cakes')
export class CakeController {
  constructor(private readonly cakeService: CakeService) {}

  @Post()
  create(@Body() dto: CreateCakeDto) {
    return this.cakeService.create(dto);
  }

  @Get()
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
  findOne(@Param('id') id: string) {
    return this.cakeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    return this.cakeService.update(+id, updateCakeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cakeService.remove(+id);
  }
}
