import { UserModel } from "../models/user.model";
import { IUserRepository } from "./interfaces/user.interface";

export class UserRepository implements IUserRepository{

  constructor() {}

  async getUserById(userId: string | number): Promise<UserModel> {
    return {
      username: 's',
      age: 11,
      email:'sssss'
    };
  }
}