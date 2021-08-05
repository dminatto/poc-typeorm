import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  fallback(): string {
    return (
      'Ok => ' + process.env.VERSION ||
      'server running...' + ' : ' + process.env.NAME
    );
  }
}
