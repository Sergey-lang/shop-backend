import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cakes')
export class CakeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column({
    default: 0,
  })
  views: number;

  @ApiProperty()
  @ManyToOne(() => UserEntity, { eager: true })
  user: UserEntity;

  @ApiProperty({
    required: false,
  })
  @Column({ nullable: true })
  imgUrl?: string;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
