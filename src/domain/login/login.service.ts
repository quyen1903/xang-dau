import { Injectable, Body, Res, HttpException, HttpStatus } from "@nestjs/common";
import axios from "axios";
import { LOGIN } from "src/app.config";
import { LoginDTO } from "./dto/login.dto";

@Injectable()
export class LoginService{
    async login(@Body() body: LoginDTO, @Res() res: any){
        const targetUrl = LOGIN;
        console.log('login', targetUrl)
        try {
            const response = await axios.post(targetUrl, body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return res.status(response.status).send(response.data);
        } catch (error) {
            const { response } = error;
            if (response) {
                throw new HttpException(response.data, response.status);
            }
            throw new HttpException(
                'Unable to forward the request',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}