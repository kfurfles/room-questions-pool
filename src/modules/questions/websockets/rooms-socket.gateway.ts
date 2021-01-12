import { 
  WebSocketGateway, 
  SubscribeMessage, MessageBody, 
  WebSocketServer, 
  OnGatewayInit, 
  OnGatewayConnection, 
  OnGatewayDisconnect, 
  WsResponse} from '@nestjs/websockets';
// import { RoomsSocketService } from '../../rooms-socket/rooms-socket.service';
// import { CreateRoomsSocketDto } from '../dto/create-rooms-socket.dto';
// import { UpdateRoomsSocketDto } from '../dto/update-rooms-socket.dto';
import { Server } from 'ws';

@WebSocketGateway(8080, { transports: ['websocket'] })
export class RoomsSocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  // constructor() {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  handleEvent(client: any, data: unknown): WsResponse<unknown> {
    const event = 'events';

    console.log({ data })
    return { event, data };
  }

  newQuestion() {
    setInterval(() => {
      console.log('called')
      this.server.clients.forEach((client) => {
        client.send(new Date().toTimeString());
      });
    }, 1000);
    // this.server.clients().emit('teste', 'foooooooo')
    // this.server.emit('msgToClient', 'HELLO CLIENT');
  }

  afterInit(server: Server) {
    server.on('connection', (ws) => {
      console.log('Client connected');
      ws.on('close', () => console.log('Client disconnected'));
    });
   }
  
   handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
   }
  
   handleConnection(client: any, ...args: any[]) {
    //  console.log(client)
    console.log(`Client connected: ${client.id}`);
   }
}
