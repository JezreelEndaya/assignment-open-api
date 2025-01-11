import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TwitterService {

    async getUserByname(name: string):  Promise<any>{

        const options = {
            url: 'https://twitter241.p.rapidapi.com/user',
            params: {
                username: name
            },
            headers: {
                'x-rapidapi-key': '3ed4eea6f0mshb8e319e8a273b55p18e3c2jsn29dff1ded722',
                'x-rapidapi-host': 'twitter241.p.rapidapi.com'
            }};

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    
    
}
