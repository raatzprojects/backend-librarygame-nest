import { Game } from 'src/games/entities/game.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Order from './order.entity';

@Entity('orders_games')
class OrdersGames {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.orders_games)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Game, (game) => game.orders_games)
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @Column()
  order_id: string;

  @Column()
  game_id: string;
}

export default OrdersGames;
