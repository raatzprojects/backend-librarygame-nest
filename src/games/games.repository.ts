import { Repository, EntityRepository, In } from 'typeorm';
import { Game } from './entities/game.entity';

interface IFindGames {
  id: string;
}

@EntityRepository(Game)
export class GamesRepository extends Repository<Game> {
  public async findAllByIds(games: IFindGames[]): Promise<Game[]> {
    const gamesIds = games.map((game) => game.id);

    const existentGames = await this.find({
      where: {
        id: In(gamesIds),
      },
    });

    return existentGames;
  }
}

export default GamesRepository;
