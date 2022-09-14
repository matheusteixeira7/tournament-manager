import { Player } from '../../src/players/entities';
import { PlayersRepository } from '../../src/players/repositories/players.repository';

export class InMemoryPlayersRepository implements PlayersRepository {
  items: Player[] = [];

  findById(id: string): Promise<Player> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<Player> {
    const player = this.items.find((item) => item.email === email);

    if (!player) {
      return null;
    }

    return player;
  }
  async create(player: Player): Promise<Player> {
    const findIndex = this.items.findIndex((item) => item._id === player._id);

    if (findIndex === -1) {
      this.items.push(player);
    }

    return player;
  }
  update(Player: Player): Promise<Player> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Player[]> {
    throw new Error('Method not implemented.');
  }
}
