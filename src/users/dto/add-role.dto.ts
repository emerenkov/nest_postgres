import {IsNumber, IsString} from "class-validator";


export class AddRoleDto {
  @IsString({message: 'Должно быть строкай'})
  readonly value: string;
  @IsNumber({}, {message: 'Должен быть числовым значением'})
  readonly userId: number;
}
