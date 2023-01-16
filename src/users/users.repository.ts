import { Repository, EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findById(id: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        id,
      },
    });

    return user;
  }
}

export default UsersRepository;
