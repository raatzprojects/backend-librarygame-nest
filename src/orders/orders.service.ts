import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

import Order from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly OrderRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    const order = this.OrderRepository.create(createOrderDto);
    this.OrderRepository.save(order);

    return order;
  }

  findOne(id: string) {
    const order = this.OrderRepository.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order ID ${id} not found.`);
    }
    return order;
  }
}
