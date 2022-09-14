import { Controller, Post, Body } from '@nestjs/common';
import { CreatePlayerService } from './services';
import { CreatePlayerDto } from './dtos';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: CreatePlayerService) {}

  @Post()
  async createAndUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return await this.playersService.execute(createPlayerDto);
  }
}
