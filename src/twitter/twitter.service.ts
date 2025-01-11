import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TwitterService {

    async getUserInfo(name: string):  Promise<any>{

        const options = {
            url: 'https://twitter-api45.p.rapidapi.com/screenname.php',
            params: {
                screenname: name
            },
            headers: {
                'x-rapidapi-key': '3ed4eea6f0mshb8e319e8a273b55p18e3c2jsn29dff1ded722',
                'x-rapidapi-host': 'twitter-api45.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
    }

    async getUserTimeline(name: string):  Promise<any>{

        const options = {
            url: 'https://twitter-api45.p.rapidapi.com/timeline.php',
            params: {
                screenname: name
            },
            headers: {
                'x-rapidapi-key': '3ed4eea6f0mshb8e319e8a273b55p18e3c2jsn29dff1ded722',
                'x-rapidapi-host': 'twitter-api45.p.rapidapi.com'
            }
            };

            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
    }

}
