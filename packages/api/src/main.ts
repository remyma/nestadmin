import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const userApiOptions = new DocumentBuilder()
      .setTitle('Users API')
      .setDescription('Api to manage users.')
      .setVersion('1.0.0')
      .addTag('users')
      .build();

  const userApiDocument = SwaggerModule.createDocument(app, userApiOptions, );
  SwaggerModule.setup(`/`, app, userApiDocument);

  await app.listen(3000);
}
bootstrap();
