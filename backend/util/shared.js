"use strict";
exports.__esModule = true;
exports.docs = exports.STATUS = exports.createResponse = exports.formatError = void 0;
var swagger_1 = require("@nestjs/swagger");
function formatError(errors) {
    var myErrors = {};
    errors.forEach(function (error) {
        myErrors[error.property] = error.constraints;
    });
    return myErrors;
}
exports.formatError = formatError;
function createResponse(statusCode, message, data, isLogin, token) {
    if (isLogin === void 0) { isLogin = false; }
    if (token === void 0) { token = ''; }
    var resp = {
        statusCode: statusCode,
        message: message,
        token: token
    };
    if (data && Array.isArray(data)) {
        delete resp.token;
        data = [data];
        if (data.length > 0) {
            resp.data = data;
        }
    }
    else if (isLogin) {
        delete resp.data;
        resp.token = token;
    }
    else {
        delete resp.token;
        resp.data = data;
    }
    return resp;
}
exports.createResponse = createResponse;
var STATUS;
(function (STATUS) {
    STATUS["active"] = "active";
    STATUS["deleted"] = "deleted";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
function docs(app) {
    var config = new swagger_1.DocumentBuilder()
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        "in": 'header'
    })
        .setTitle('Polymorphlabs')
        .setDescription('This is the swagger documentation for the Polymorphlas  API')
        .setVersion('1.0')
        .addTag('Polymorphlabs API')
        .build();
    return swagger_1.SwaggerModule.createDocument(app, config);
}
exports.docs = docs;
