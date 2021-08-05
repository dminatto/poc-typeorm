import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, '0.0.0.0');
  console.log('Server is running at port: ' + PORT);
}
bootstrap();
