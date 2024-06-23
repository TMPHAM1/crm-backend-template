import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";



export const CurrentUser = createParamDecorator(
    (data, context:ExecutionContext) => {
        const ctx=GqlExecutionContext.create(context); 
        const req = ctx.getContext().req;
        if (data) return req.user[data]

        return req.user
    }
)