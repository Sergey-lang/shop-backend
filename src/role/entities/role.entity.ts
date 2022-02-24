import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('roles')
export class RoleEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Type of role' })
  @Column({ unique: true })
  value: string;

  @ApiProperty({ example: 'Can delete users', description: 'Role description' })
  @Column()
  description: string;

  // @ManyToMany(() => UserEntity, { eager: true })
  // user: [UserEntity];
}
