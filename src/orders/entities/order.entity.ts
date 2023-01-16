import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import OrdersGames from './orderGames.entity';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrdersGames, (orders_games) => orders_games.order, {
    cascade: true,
  })
  orders_games: OrdersGames[];
}

export default Order;
