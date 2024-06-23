import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from "@nestjs/config";



@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('REFRESH_TOKEN_SECRET'),
            passReqToCallBack: true,
        })
    }

    validate(req, payload) {
        const refreshToken = req?.get('authorization')?.replace('Bearer', '').trim();
        console.log(payload, 'payload');
        return {
            ...payload,
            refreshToken,
        }
    }
}