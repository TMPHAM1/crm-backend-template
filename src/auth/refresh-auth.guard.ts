import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';


   @Injectable()
   export class RefreshTokenGuard extends AuthGuard('jwt-refresh') {
    constructor (private readonly userService:UserService) {
      super();
    }

    getRequest(context: ExecutionContext) {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;
      return req;
    }
  }