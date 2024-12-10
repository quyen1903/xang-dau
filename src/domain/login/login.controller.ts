import { Controller, Post, Body, Res, HttpException, HttpStatus } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';

@Controller('Account')
export class LoginController {
    constructor(private accountService:LoginService){}
    
    @Post('Login')
    async login(@Body() body: LoginDTO, @Res() res: any) {
        console.log('this is body',body)
        this.accountService.login(body, res)
    }
}
