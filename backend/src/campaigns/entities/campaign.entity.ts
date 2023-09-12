import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { STATUS } from 'util/shared';
import { Group } from './group.entity';
@Entity({ name: 'campaigns' })
export class Campaign extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  description: string;

  @Column({ type: 'enum', enum: STATUS, default: STATUS.active })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude({ toPlainOnly: true })
  updated_at: Date;

  @DeleteDateColumn()
  @Exclude({ toPlainOnly: true })
  deleted_at: Date;

  @ManyToOne(() => User, (user: User) => user.campaigns)
  user: User;

  @ManyToOne(() => Group, (group: Group) => group.campaigns, {
    eager: true,
  })
  @JoinTable()
  group: Group;
}
