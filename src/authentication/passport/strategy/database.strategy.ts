import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../../user/entities/user.entity';
import { BcryptService } from '../../services/bcrypt.service';

@Injectable()
export class DatabaseStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
  ) {
    super(
      {
        usernameField: 'identifier',  // Specify the field for the username
      }
    );
  }

  // async validate(username: string, password: string): Promise<User> {
  //   const user = await this.userRepository
  //     .createQueryBuilder('user')
  //     .where('user.username = :username', {
  //       username,
  //     })
  //     .select(['user.id', 'user.username', 'user.password'])
  //     .getOne();

  //   if (!user) {
  //     throw new UnauthorizedException('Invalid username or password supplied');
  //   }

  //   // if (!user.confirmedAt) {
  //   //   throw new UnauthorizedException('You must accept the invitation before you log in. Please check your email first.');
  //   // }

  //   if (await this.bcryptService.verifyCredentials(user, password)) {
  //     return user;
  //   }

  //   throw new UnauthorizedException('Invalid username or password supplied');
  // }
  async validate(identifier: string, password: string): Promise<User> {
    console.log(identifier);
    
    const user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.username = :identifier OR user.email = :identifier OR user.phone = :identifier', {
      identifier,
    })
    .select(['user.id', 'user.username', 'user.password'])
    .getOne();
    if (!user) {
      throw new UnauthorizedException('Invalid username, email, or phone, or password supplied');
    }

    if (await this.bcryptService.verifyCredentials(user, password)) {
      return user;
    }

    throw new UnauthorizedException('Invalid username, email, or phone, or password supplied');
  }

}
