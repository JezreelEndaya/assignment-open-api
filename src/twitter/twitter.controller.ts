import { Controller, Get, Param } from '@nestjs/common';
import { TwitterService } from './twitter.service';

@Controller('twitter')
export class TwitterController {

    constructor(private readonly twitterService: TwitterService){}

    @Get('userinfo/:name')
    async getUserInfo(@Param('name') name: string ){
        return this.twitterService.getUserInfo(name);
    }

    @Get('usertimeline/:name')
    async getUserTimeline(@Param('name') name: string){
        return this.twitterService.getUserTimeline(name);
    }

    @Get('userfollowing/:name')
    async getUserFollowing(@Param('name') name: string){
        return this.twitterService.getUserFollowing(name);
    }

    @Get('userfollowers/:name')
    async getUserFollowers(@Param('name') name: string){
        return this.twitterService.getUserFollowers(name);
    }

}
