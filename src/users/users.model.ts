import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  //DataType.INTEGER - числовое, unique - уникальное, autoIncrement - авто увелечение, primaryKey - первичный ключ
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  // allowNull - может быть пустым (фолсе - не может быть пустым)
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;
  @Column({type: DataType.STRING, allowNull: false})
  password: string;
  // defaultValue - значение по умолчанию
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;
}
