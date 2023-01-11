import { IsNumber, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  name: string;

  @IsString()
  console: string;

  @IsNumber()
  year: number;
}
