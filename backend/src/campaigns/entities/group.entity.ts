// import { Exclude } from 'class-transformer';
// import { IsNotEmpty } from 'class-validator';
// import {
//   BaseEntity,
//   Column,
//   CreateDateColumn,
//   DeleteDateColumn,
//   Entity,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';
// import { STATUS } from 'util/shared';

// @Entity({ name: 'groups' })
// export class Group extends BaseEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ unique: true })
//   @IsNotEmpty()
//   name: string;

//   @Column({ type: 'enum', enum: STATUS, default: STATUS.active })
//   status: string;

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   @Exclude({ toPlainOnly: true })
//   updated_at: Date;

//   @DeleteDateColumn()
//   @Exclude({ toPlainOnly: true })
//   deleted_at: Date;
// }
