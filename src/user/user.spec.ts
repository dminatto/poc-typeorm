import { Test } from '@nestjs/testing';
import { UserFacede } from './user.facede';
import { UserService } from './user.service';
import { User } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('User', () => {
  let mockedUserFacede: UserFacede;
  let mockedUserService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UserService,
        UserFacede,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    mockedUserFacede = moduleRef.get<UserFacede>(UserFacede);
    mockedUserService = moduleRef.get<UserService>(UserService);
  });

  it('should be able to create a new user', async () => {
    const req = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'teste@email.net',
      anonymous: false,
    };

    jest.spyOn(mockedUserService, 'create').mockImplementation(
      async () =>
        await {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'teste@email.net',
          anonymous: false,
        },
    );

    const user = await mockedUserFacede.createNewUser(
      'John',
      'Doe',
      'teste@email.net',
      false,
    );

    expect(user.firstName).toBe(req.firstName);
    expect(user.email).toBe(req.email);
    expect(user.anonymous).toBe(req.anonymous);
  });
});
