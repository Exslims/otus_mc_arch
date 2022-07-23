import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["debug", "verbose", "log", "warn", "error"]
  });
  await app.listen(process.env.NODE_PORT || 3000);
}
bootstrap();
