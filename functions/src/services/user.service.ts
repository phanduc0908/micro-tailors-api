import * as userRepo from '../repositories/user.repository';

export const getUserById = async (userId: string | number) => {
  let data = await userRepo.getUserById(1);
  return data;
}
