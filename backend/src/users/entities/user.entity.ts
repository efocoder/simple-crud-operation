import {
  Column,
  DataType,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Exclude } from 'class-transformer';

import * as bcrypt from 'bcrypt';
import { STATUS } from 'util/shared';
import { UUIDV4 } from 'sequelize';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @IsUUID(4)
  @Column({ defaultValue: UUIDV4, unique: true })
  id: string;

  @Column({ unique: true, allowNull: false })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ unique: true, allowNull: false })
  @Length(4, 6)
  @IsNotEmpty()
  nickname: string;

  @Column
  @IsNotEmpty()
  @Length(6)
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({
    type: DataType.ENUM(STATUS.active, STATUS.deleted),
    allowNull: false,
    defaultValue: STATUS.active,
  })
  status: string;

  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  static async checkPassword(password: string, user: any): Promise<boolean> {
    return await bcrypt.compare(password, user.password);
  }
}
