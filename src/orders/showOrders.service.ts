import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import OrdersGames from './entities/orderGames.entity';

@Injectable()
export class ShowOrdersService {
  constructor(
    @InjectRepository(OrdersGames)
    private readonly OrderRepository: Repository<OrdersGames>,
  ) {}

  findOne(id: string) {
    const order = this.OrderRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order ID ${id} not found.`);
    }
    return order;
  }
}
