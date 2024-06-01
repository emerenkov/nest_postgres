import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'Почтовый ящик'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({},{message: 'Не корректный емаил'})
  readonly email: string;
  @ApiProperty({example: '123456', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не менее 4 и не более 16'})
  readonly password: string;
}
