import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function formatError(errors: any) {
  const myErrors = {};

  errors.forEach((error: { property: string | number; constraints: any }) => {
    myErrors[error.property] = error.constraints;
  });

  return myErrors;
}

export interface CreateResponseType {
  statusCode: number;
  message: string;
  data?: any;
  isLogin?: boolean;
  token: string;
}

export function createResponse(
  statusCode: number,
  message: string,
  data?: any,
  isLogin = false,
  token = '',
): CreateResponseType {
  const resp: CreateResponseType = {
    statusCode: statusCode,
    message: message,
    token: token,
  };
  if (data && Array.isArray(data)) {
    delete resp.token;
    data = data;
    if (data.length > 0) {
      resp.data = data;
    } else resp.data = [];
  } else if (isLogin) {
    delete resp.data;
    resp.token = token;
  } else {
    delete resp.token;
    resp.data = data;
  }

  return resp;
}

export enum STATUS {
  active = 'active',
  deleted = 'deleted',
}

export function docs(app: INestApplication<any>): OpenAPIObject {
  const config = new DocumentBuilder()
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    })
    .setTitle('Polymorphlabs')
    .setDescription(
      'This is the swagger documentation for the Polymorphlas  API',
    )
    .setVersion('1.0')
    .addTag('Polymorphlabs API')
    .build();

  return SwaggerModule.createDocument(app, config);
}
