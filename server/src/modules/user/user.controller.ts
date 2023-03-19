import {
  Controller,
  Get,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Post,
  Body,
  Patch,
  UseGuards,
} from '@nestjs/common';
import FindOneParams from 'src/internal/utils/findOneParams';
import RoleGuard from '../authentication/guards/role.guard';
import changePasswordDto from './dto/changePassword.dto';
import CreateUserDto from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import Role from './types/role.enum';

import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: FindOneParams) {
    return this.userService.getById(Number(id));
  }

  @Post()
  @UseGuards(RoleGuard(Role.Admin))
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Patch(':id')
  async update(
    @Param() { id }: FindOneParams,
    @Body() updateUser: UpdateUserDto,
  ) {
    return await this.userService.update(Number(id), updateUser);
  }

  @Delete(':id')
  remove(@Param() { id }: FindOneParams) {
    return this.userService.delete(Number(id));
  }

  @Post('/change-password')
  async updatePassword(@Body() changePassword: changePasswordDto) {
    return await this.userService.changePassword(changePassword);
  }
}
