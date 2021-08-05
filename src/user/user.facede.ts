import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Injectable()
export class UserFacede {
  constructor(private readonly userService: UserService) {}

  async createNewUser(
    email: string,
    name: string,
    anonymous: boolean,
  ): Promise<User> {
    return await this.userService.create({ name, email, anonymous });
  }

  async getAllUser(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
