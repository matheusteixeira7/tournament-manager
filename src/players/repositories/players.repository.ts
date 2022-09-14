import { Player } from '../entities/player.entity';

export interface PlayersRepository {
  findById(id: string): Promise<Player | null>;
  findByEmail(email: string): Promise<Player | null>;
  create(player: Player): Promise<Player>;
  update(Player: Player): Promise<Player>;
  delete(id: string): Promise<void>;
  list(): Promise<Player[]>;
}
