import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/post.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  //DataType.INTEGER - числовое, unique - уникальное, autoIncrement - авто увелечение, primaryKey - первичный ключ
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'Почтовый ящик'})
  // allowNull - может быть пустым (фолсе - не может быть пустым)
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '123456', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'true', description: 'Забанен пользователь или нет'})
  // defaultValue - значение по умолчанию
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'За хулиганство',  description: 'Причина блокировки'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role,  () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}
