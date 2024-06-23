import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';


   @Injectable()
   export class GqlAuthGuard extends AuthGuard('jwt') {
    constructor (private reflector:Reflector, private readonly userService:UserService) {
      super();
    }

    getRequest(context: ExecutionContext) {
      const ctx = GqlExecutionContext.create(context);
      const req = ctx.getContext().req;
      return req;
    }

    async canActivate(context: ExecutionContext) : Promise<boolean>   {
      // const isPublic =  this.reflector.getAllAndOverride('isPubilic', [context.getHandler(), context.getClass()]);
      // if(isPublic) {
      //   return true;
      // }
      return await super.canActivate(context) as boolean;
     
    }
  
   
  }