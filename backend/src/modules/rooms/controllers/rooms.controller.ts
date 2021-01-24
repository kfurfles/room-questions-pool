import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { RoomsService } from '../services/rooms.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Response } from 'express';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {    
    return this.roomsService.create(createRoomDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
    try {
      return await this.roomsService.findOne(id);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message })
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto, @Res({ passthrough: true }) res: Response) {
    try {
      return await this.roomsService.update(id, updateRoomDto);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message })
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(+id);
  }
}
