import { Controller, Get, Post, Param, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateOrdersService } from './createOrders.service';
import { ShowOrdersService } from './showOrders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly showOrdersService: ShowOrdersService,
    private readonly createOrder: CreateOrdersService,
  ) {}

  @Post()
  public async create(@Res() { user_id, games }) {
    const order = await this.createOrder.execute({
      user_id,
      games,
    });

    return response.json(order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showOrdersService.findOne(id);
  }
}
