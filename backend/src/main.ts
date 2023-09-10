import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ClassSerializerInterceptor,
  ValidationError,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { docs, formatError } from 'util/shared';
import { TransformInterceptor } from 'util/transform.interceptor';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException(formatError(errors)),
    }),
  );

  SwaggerModule.setup('docs', app, docs(app));

  await app.listen(+process.env.APP_PORT || 3000);
}
bootstrap();
