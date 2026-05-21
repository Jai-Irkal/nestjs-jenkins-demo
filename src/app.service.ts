import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSecondMessage(): string {
    return 'This is the second message!';
  }
}
