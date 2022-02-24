import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateCakeDto } from '../cake/dto/create-cake.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  @ApiBody({ type: CreateCakeDto })
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }
}
