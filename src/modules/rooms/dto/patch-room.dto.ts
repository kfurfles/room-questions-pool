import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';

export class PatchPasswordRoomDto extends PartialType(CreateRoomDto) {
    password: string
}
