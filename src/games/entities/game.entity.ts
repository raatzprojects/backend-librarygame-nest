import OrdersGames from 'src/orders/entities/orderGames.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => OrdersGames, (orders_games) => orders_games.game)
  orders_games: OrdersGames[];

  @Column()
  name: string;

  @Column()
  console: string;

  @Column()
  year: number;
}
