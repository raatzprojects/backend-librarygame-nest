import { Module } from '@nestjs/common';
import { ShowOrdersService } from './showOrders.service';
import { OrdersController } from './orders.controller';
import Order from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrdersGames from './entities/orderGames.entity';
import { CreateOrdersService } from './createOrders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrdersGames])],
  controllers: [OrdersController],
  providers: [ShowOrdersService, CreateOrdersService],
})
export class OrdersModule {}
