import { Test, TestingModule } from '@nestjs/testing';
import { GrpcAppController } from './grpc_app.controller';
import { GrpcAppService } from './grpc_app.service';

describe('GrpcAppController', () => {
  let grpcAppController: GrpcAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GrpcAppController],
      providers: [GrpcAppService],
    }).compile();

    grpcAppController = app.get<GrpcAppController>(GrpcAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(grpcAppController.getHello()).toBe('Hello World!');
    });
  });
});
