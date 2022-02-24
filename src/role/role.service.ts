import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private repository: Repository<RoleEntity>,
  ) {}

  createRole(dto: CreateRoleDto) {
    return this.repository.create(dto);
  }

  getRoleByValue(value: string) {
    return this.repository.findOne({ where: { value } });
  }
}
