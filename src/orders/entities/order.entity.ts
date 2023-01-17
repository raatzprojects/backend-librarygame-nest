import { User } from 'src/users/entities/user.entity';
import {
  Column,
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

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrdersGames, (orders_games) => orders_games.order, {
    cascade: true,
  })
  orders_games: OrdersGames[];

  @Column()
  user_id: string;
}

export default Order;
