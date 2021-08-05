import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UserFacede } from './user.facede';

@Controller('user')
export class UserController {
  constructor(private readonly userFacede: UserFacede) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userFacede.getAllUser();
  }

  @Post()
  async create(@Req req): Promise<User> {
    const { firstName, lastName, email, anonymous } = req.body;
    return await this.userFacede.createNewUser(
      firstName,
      lastName,
      email,
      anonymous,
    );
  }
}
