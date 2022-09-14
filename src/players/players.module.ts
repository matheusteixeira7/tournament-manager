import { Module } from '@nestjs/common';
import { CreatePlayerService } from './services';
import { PlayersController } from './players.controller';
import { InMemoryPlayersRepository } from 'tests/repositories/InMemoryPlayersRepository';

@Module({
  controllers: [PlayersController],
  providers: [CreatePlayerService, InMemoryPlayersRepository],
})
export class PlayersModule {}
