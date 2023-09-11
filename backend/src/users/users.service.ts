import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { STATUS } from 'util/shared';

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}
  private readonly logger = new Logger(UsersService.name);

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, nickname, phone, password } = createUserDto;

    try {
      const hashedPassword: string = await User.hashPassword(password);

      const user: User = User.create({
        email,
        nickname,
        phone,
        password: hashedPassword,
      });
      await user.save();
      user.reload();
      return user;
    } catch (error) {
      this.logger.error(error);
      if (error.constraint === 'UQ_97672ac88f789774dd47f7c8be3') {
        throw new BadRequestException({ email: 'Email already exist' });
      } else if (error.constraint === 'UQ_ad02a1be8707004cb805a4b5023') {
        throw new BadRequestException({ nickname: 'Nickname already exist' });
      } else if (error.constraint === 'UQ_a000cca60bcf04454e727699490') {
        throw new BadRequestException({ phone: 'Phone number already exist' });
      } else {
        throw new InternalServerErrorException('Something went wrong');
      }
    }
  }

  async login(loginDto: LoginDto): Promise<string> {
    const { email, password } = loginDto;

    try {
      const user: User = await User.findOneBy({
        email: email,
        status: STATUS.active,
      });

      if (user == null) this.handleException();

      if (await User.checkPassword(password, user)) {
        const payload = { userId: user.id };
        const token: string = await this.jwtService.signAsync(payload);

        return token;
      } else this.handleException();
    } catch (error) {
      this.logger.log(error);
      this.handleException();
    }
  }

  private handleException() {
    throw new UnauthorizedException('Invalid credentials');
  }
}
