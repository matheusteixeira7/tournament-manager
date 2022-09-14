import { Injectable } from '@nestjs/common';
import { InMemoryPlayersRepository } from '../../../tests/repositories/InMemoryPlayersRepository';
import { CreatePlayerDto } from '../dtos';
import { Player } from '../entities/player.entity';

@Injectable()
export class CreatePlayerService {
  constructor(private playersRepository: InMemoryPlayersRepository) {}

  async execute(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const { name, email, phoneNumber } = createPlayerDto;

    const player = await this.playersRepository.findByEmail(email);

    if (player) {
      throw new Error('Player already exists');
    }

    const newPlayer = Player.create({ name, email, phoneNumber });

    return await this.playersRepository.create(newPlayer);
  }
}
