import { Test, TestingModule } from '@nestjs/testing';
import { RoomsSocketGateway } from './rooms-socket.gateway';
// import { RoomsSocketService } from '../../rooms-socket/rooms-socket.service';

describe('RoomsSocketGateway', () => {
  let gateway: RoomsSocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsSocketGateway],
    }).compile();

    gateway = module.get<RoomsSocketGateway>(RoomsSocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
