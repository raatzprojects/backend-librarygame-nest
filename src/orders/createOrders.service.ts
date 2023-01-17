import { NotFoundException } from '@nestjs/common';

import GamesRepository from 'src/games/games.repository';
import UsersRepository from 'src/users/users.repository';
import { getCustomRepository } from 'typeorm';

import OrdersRepository from './orders.repository';

interface IGames {
  id: string;
}

interface IRequest {
  user_id: string;
  games: IGames[];
}
export class CreateOrdersService {
  async execute({ user_id, games }: IRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    const gamesRepository = getCustomRepository(GamesRepository);
    const ordersRepository = getCustomRepository(OrdersRepository);

    const usersExists = await usersRepository.findById(user_id);

    if (!usersExists) {
      throw new NotFoundException(`Could not find user with the given id`);
    }

    const existsGames = await gamesRepository.findAllByIds(games);

    if (!existsGames.length) {
      throw new NotFoundException(`Could not find user with the given id`);
    }

    const existsGamesIds = existsGames.map((game) => game.id);

    const checkInexistentGames = games.filter(
      (game) => !existsGamesIds.includes(game.id),
    );

    if (checkInexistentGames.length) {
      throw new NotFoundException(`Could not find user with the given id`);
    }

    const serializedGames = games.map((game) => ({
      game_id: game.id,
    }));

    const order = await ordersRepository.createOrder({
      user: usersExists,
      games: serializedGames,
    });

    return order;
  }
}
