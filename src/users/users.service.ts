import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.UserRepository.create(createUserDto);
    return this.UserRepository.save(user);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: string) {
    const user = this.UserRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.UserRepository.preload({
      id: +id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return this.UserRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.UserRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`user ID ${id} not found`);
    }

    return this.UserRepository.remove(user);
  }
}
