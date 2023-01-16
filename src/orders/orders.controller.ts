import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { response } from 'express';
import { CreateOrdersService } from './createOrders.service';
import { ShowOrdersService } from './showOrders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly showOrdersService: ShowOrdersService) {}

  @Post()
  public async create(@Body() { user_id, games }) {
    const createOrder = new CreateOrdersService();

    const order = await createOrder.create({
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
