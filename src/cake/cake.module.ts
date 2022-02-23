import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CakeController } from './cake.controller';
import { CakeEntity } from './entities/cake.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CakeEntity])],
  controllers: [CakeController],
  providers: [CakeService],
})
export class CakeModule {}
