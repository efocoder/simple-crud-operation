import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Exclude } from 'class-transformer';

import * as bcrypt from 'bcrypt';
import { STATUS } from 'util/shared';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @Length(4, 6)
  @IsNotEmpty()
  nickname: string;

  @Column()
  @IsNotEmpty()
  @Length(6)
  @Exclude({ toPlainOnly: true })
  password: string;

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

  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  static async checkPassword(password: string, user: any): Promise<boolean> {
    return await bcrypt.compare(password, user.password);
  }
}
