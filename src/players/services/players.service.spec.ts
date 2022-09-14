import { InMemoryPlayersRepository } from '../../../tests/repositories/InMemoryPlayersRepository';
import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerService } from './players.service';

describe('PlayersService', () => {
  let sut: CreatePlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePlayerService, InMemoryPlayersRepository],
    }).compile();

    sut = module.get<CreatePlayerService>(CreatePlayerService);
  });

  it('should NOT create an user if email already exists', async () => {
    const dto = {
      name: 'any_name',
      email: 'any_email',
      phoneNumber: 'any_phone',
    };

    await sut.execute(dto);

    await expect(sut.execute(dto)).rejects.toThrowError(
      'Player already exists',
    );
  });

  it('should create an user if email does not exist', async () => {
    const dto = {
      name: 'any_name',
      email: 'any_email',
      phoneNumber: 'any_phone',
    };

    const result = await sut.execute(dto);

    expect(result).toHaveProperty('_id');
  });
});
