import { Module } from "@nestjs/common";
import { UsersController } from "./3user.controller";
import { UserService } from "./2user.service";


@Module({
  controllers:[UsersController],
  providers:[UserService]
})
export class UserModule{}