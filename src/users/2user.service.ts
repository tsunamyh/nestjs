import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersModel } from "./1users.model";

@Injectable()
export class UserService {
  constructor() { }

  usersList: UsersModel[] = [];

  insertUser(name: string, degree: string, age: number) {
    const user = new UsersModel(Math.floor(Math.random() * 89999)+10000, name, degree, age)
    this.usersList.push(user)
  }

  getUsers() {
    return [...this.usersList]
  }

  getSingleUser(userID: number) {
    const userIndex = this.findUserIndex(userID)
    return this.usersList[userIndex]
  }

  updateUser(userID: number, name: string, degree: string, age: number) {
    const userIndex = this.findUserIndex(userID)
    const updatedUser = this.usersList[userIndex]
    if (name) {
      updatedUser.name = name
    }
    if (degree) {
      updatedUser.degree = degree
    }
    if (age) {
      updatedUser.age = age
    }
    this.usersList[userIndex] = updatedUser
  }
  
  deleteUserById(userID: number) {
    const userIndex = this.findUserIndex(userID)
    this.usersList.splice(userIndex,1)
  }

  findUserIndex(userID: number) {
    const userIndex = this.usersList.findIndex((user) => user.id === userID)
    if (userIndex === -1) {
      throw new NotFoundException("Not found USER ID")
    }
    return userIndex
  }
}