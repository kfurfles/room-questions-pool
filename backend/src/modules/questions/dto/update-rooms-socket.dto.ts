import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomsSocketDto } from './create-rooms-socket.dto';

export class UpdateRoomsSocketDto extends PartialType(CreateRoomsSocketDto) {
  id: number;
}
