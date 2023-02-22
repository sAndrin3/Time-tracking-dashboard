import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  sender_id!: number;

  @Field()
  @Column()
  receiver_id!: number;

  @Field()
  @Column()
  text: string;

  @Field()
  @Column()
  is_read: Boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;
}
