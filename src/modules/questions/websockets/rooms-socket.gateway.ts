import { 
  WebSocketGateway, 
  WebSocketServer, 
  OnGatewayInit, 
  OnGatewayConnection, 
  OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server } from 'ws';
import { uuid } from 'uuidv4'
import { getAllUrlParams } from 'src/modules/helpers/url-params';
import { Question } from '../entities/question.entity';
interface AppWebSocket extends Server {
  id: string,
  roomId: string
}

@WebSocketGateway(8080, { transports: ['websocket'] })
export class RoomsSocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  clients = []

  @WebSocketServer() server: Server;

  newQuestion(roomID: string, questions: Question[]) {

    this.server.clients.forEach((client) => {
      const clientRoomID = client['roomId']

      if(roomID.match(clientRoomID)){
        client.send(JSON.stringify({ questions }))
      }
    })
  }

  afterInit(server: Server) { 
    server.on('connection', (c: AppWebSocket, r) => this.handleConnection(c,r));
  }
  
  handleDisconnect(client: AppWebSocket) {
    console.log(`Client disconnected, ID: ${client.id} || room: ${client.roomId}`)
  }

  handleConnection(client: AppWebSocket, req: any) {
    const params = getAllUrlParams(req.url);
    client.id =  uuid()
    client.roomId = params['roomid']

    console.log(`Client connected, ID: ${client.id} || room: ${client.roomId}`)
    
    client.once('close', (e) => this.handleDisconnect(client))
  }
}
