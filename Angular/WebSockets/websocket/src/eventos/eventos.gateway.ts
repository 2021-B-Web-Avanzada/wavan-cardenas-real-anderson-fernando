import {WebSocketGateway} from "@nestjs/websockets";
import {options} from "tsconfig-paths/lib/options";
import exp from "constants";

@WebSocketGateway(
    8080,
     {
        cors: {
            origin: '*',
        },
        namespace: 'events',
     }
     )

export class EventosGateway{

}
