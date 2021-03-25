import database from '../databases/dbConnection';

const getUserById = async (userId: string | number) => {
  const result = await database.collection('users').doc('8YyWgRgd2uMgZj6PTniM').get();
  return result.data();
}

export default {
  getUserById
}
