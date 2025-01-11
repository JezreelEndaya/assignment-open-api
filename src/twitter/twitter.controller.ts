import { Controller, Get, Param } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {

    constructor(private readonly twitterService: TwitterService){}

    @Get('userinfo/:name')
    async getUserInfo(@Param('name') name: string ){
        return this.twitterService.getUserInfo(name);
    }

}
