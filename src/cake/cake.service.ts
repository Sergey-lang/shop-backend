import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CakeEntity } from './entities/cake.entity';
import { Repository } from 'typeorm';
import { SearchCakeDto } from './dto/search-cake.dto';

@Injectable()
export class CakeService {
  constructor(
    @InjectRepository(CakeEntity)
    private repository: Repository<CakeEntity>,
  ) {}

  create(dto: CreateCakeDto) {
    return this.repository.save({
      title: dto.title,
      description: dto.description,
      price: dto.price,
      type: dto.type,
      imgUrl: dto.imgUrl,
      user: { id: 3 },
    });
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async popular() {
    const qb = this.repository.createQueryBuilder();

    qb.orderBy('views', 'DESC');
    qb.limit(10);

    const [items, total] = await qb.getManyAndCount();

    return { items, total };
  }

  async search(dto: SearchCakeDto) {
    // https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md#getting-values-using-querybuilder
    const qb = this.repository.createQueryBuilder('c');

    qb.leftJoinAndSelect('c.user', 'user');

    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);

    if (dto.views) {
      qb.orderBy('views', dto.views);
    }

    if (dto.description) {
      qb.andWhere(`c.description ILIKE :description`);
    }

    if (dto.title) {
      qb.andWhere(`c.title ILIKE :title`);
    }

    if (dto.type) {
      qb.andWhere(`c.type ILIKE :type`);
    }

    qb.setParameters({
      title: `%${dto.title}%`,
      description: `%${dto.description}%`,
      type: `%${dto.type}%`,
      views: dto.views || '',
    });

    const [items, total] = await qb.getManyAndCount();

    return { items, total };
  }

  async findOne(id: number) {
    // https://github.com/typeorm/typeorm/issues/680#issuecomment-316298668
    await this.repository
      .createQueryBuilder('cakes')
      .whereInIds(id)
      .update()
      .set({
        views: () => 'views + 1',
      })
      .execute();

    // return this.repository.findOne(+id);

    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new HttpException(
        `Товар c id ${id} не найден`,
        HttpStatus.NOT_FOUND,
      );
    }

    return find;
  }

  async update(id: number, dto: UpdateCakeDto) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new HttpException(
        `Товар c id ${id} не найден`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOne(+id);

    if (!find) {
      throw new HttpException(
        `Товар c id ${id} не найден`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.repository.delete(id);
  }
}
