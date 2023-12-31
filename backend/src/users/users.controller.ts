import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { createResponse, CreateResponseType } from '../../util/shared';

@ApiTags('Users')
@Controller({ path: 'users/', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateResponseType> {
    return createResponse(
      HttpStatus.CREATED,
      'Sign up successful',
      await this.usersService.create(createUserDto),
    );
  }

  @Post('login/')
  @ApiResponse({ status: HttpStatus.OK })
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<CreateResponseType> {
    return createResponse(
      HttpStatus.OK,
      'Login successful',
      null,
      true,
      await this.usersService.login(loginDto),
    );
  }
}
