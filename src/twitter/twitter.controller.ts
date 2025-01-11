import { Controller, Get, Param } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {

    constructor(private readonly twitterService: TwitterService){}

    @Get('user/:name')
    async getUserByName(@Param('name') name: string ){
        return this.twitterService.getUserByname(name);
    }
}
