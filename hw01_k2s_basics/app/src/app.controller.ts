import {ConsoleLogger, Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private log: ConsoleLogger) {
  }
  @Get("/health")
  getHello(): any {
    this.log.debug("/health was executed");
    return {
      status: "OK"
    }
  }
}
