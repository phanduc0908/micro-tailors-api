import userRepo from '../repositories/user.repository';

const getUserById = async (userId: string | number) => {
  let data = await userRepo.getUserById(1);
  return data;
}

export default {
  getUserById
}