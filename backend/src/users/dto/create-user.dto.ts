import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Length, IsNumberString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @Length(4, 6)
  nickname: string;

  @IsNotEmpty()
  @ApiProperty()
  @Length(9, 14)
  @IsNumberString({}, { allowNaN: false })
  phone: string;

  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  password: string;
}

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
