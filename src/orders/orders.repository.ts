import { User } from 'src/users/entities/user.entity';
import { Repository, EntityRepository } from 'typeorm';
import Order from './entities/order.entity';

interface IGame {
  game_id: string;
}

interface IRequest {
  user: User;
  games: IGame[];
}

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  public async createOrder({ user, games }: IRequest): Promise<Order> {
    const order = this.create({
      user,
      orders_games: games,
    });

    await this.save(order);

    return order;
  }
}

export default OrdersRepository;
