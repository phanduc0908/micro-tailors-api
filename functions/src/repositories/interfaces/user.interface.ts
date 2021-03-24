import { UserModel } from "../../models/user.model";

export interface IUserRepository {
  getUserById(userId: number | string): Promise<UserModel>
}