import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Order from './entities/order.entity';

@Injectable()
export class ShowOrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly OrderRepository: Repository<Order>,
  ) {}

  findOne(id: string) {
    const order = this.OrderRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order ID ${id} not found.`);
    }
    return order;
  }
}
