import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users: User[];

  /* currently hardcoded, but should be used with db */
  constructor() {
    this.users = [
      {
        participationId: 1,
        username: 'TestUser',
        password: 'PasswordUser1',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => (user.username = username));
  }
}
