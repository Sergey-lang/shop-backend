import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JoinColumn } from 'typeorm/browser';
import { RoleEntity } from './role.entity';

@Entity('user_roles')
export class UserRoleEntity {
  // @PrimaryGeneratedColumn()
  // id: number;
  //
  // @ManyToMany(() => RoleEntity, { nullable: false, persistence: false })
  // @JoinColumn({ name: 'roleId' })
  // roleId: number;
  //
  // @Column({ type: 'integer' })
  // userId: number;
}
