import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends OmitType(PartialType(CreateRoomDto),["questions"]) {
    password: string
    name: string
}
