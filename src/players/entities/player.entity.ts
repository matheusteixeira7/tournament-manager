import { randomUUID } from 'crypto';
import { CreatePlayerDto } from '../dtos';

export class Player {
  readonly _id: string;
  phoneNumber: string;
  email: string;
  name: string;
  ranking: string;
  rankingPosition: number;
  urlPhotoPlayer: string;

  constructor(props: CreatePlayerDto) {
    this._id = this._id ?? randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.ranking = null;
    this.rankingPosition = null;
    this.urlPhotoPlayer = null;
  }

  static create(props: CreatePlayerDto) {
    return new Player(props);
  }
}
