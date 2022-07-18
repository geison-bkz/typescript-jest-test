import { MessagingProtocol } from '../classes/interfaces/MessagingProtocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
