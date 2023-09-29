import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { NewUser } from './NewUser';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  addUser(user: NewUser): Promise<User> {
    return this.userRepository.save(user);
  }
}
