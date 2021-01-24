// import { LogMiddleware } from './log.middleware';
// import { Test, TestingModule } from '@nestjs/testing';
// import { LogProvider } from './providers/log4js.provider';
// import { LoggerProvider } from '../configuration/providers/logger.provider';
// describe('LogMiddleware', () => {
//   let logMiddleware: LogMiddleware;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       providers:[
//         LogMiddleware,
//         LogProvider,
//         LoggerProvider,
//       ],
//     }).compile();

//     logMiddleware = app.get<LogMiddleware>(LogMiddleware);
//   });
//   it('should be defined', () => {
//     expect(logMiddleware).toBeDefined();
//   });
// });
