import { Controller } from '@nestjs/common';
import { GrpcAppService } from './grpc_app.service';

@Controller()
export class GrpcAppController {
  constructor(private readonly grpcAppService: GrpcAppService) {}
}
