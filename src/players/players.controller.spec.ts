import { InMemoryPlayersRepository } from '../../tests/repositories';
import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { CreatePlayerService } from './services';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [CreatePlayerService, InMemoryPlayersRepository],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
