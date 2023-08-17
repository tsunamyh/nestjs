import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './2user.service';

@Controller('users')
export class UsersController {
  constructor(private userservice: UserService) {}
  @Post()
  addUser(
    @Body('name') username: string,
    @Body('degree') userDegree: string,
    @Body('age') userAge: number,
  ) {
    this.userservice.insertUser(username, userDegree, userAge);
    return { message: 'User saved!!' };
  }
  @Get()
  getAllUsers() {
    return this.userservice.getUsers();
  }

  @Get(':id')
  getSingleUser(@Param('id') userID: string) {
    return this.userservice.getSingleUser(+userID);
  }

  @Patch(':id')
  updateUserInfo(
    @Param('id') userID: string,
    @Body('name') userName: string,
    @Body('degree') userDegree: string,
    @Body('age') userAge: number,
  ) {
    this.userservice.updateUser(+userID, userName, userDegree, userAge);
    return { message: 'User updated!!' };
  }
  @Delete(':id')
  deleteUser(@Param('id') userID: string) {
    this.userservice.deleteUserById(+userID)
    return { message: 'User deleted!!' };
  }
}
