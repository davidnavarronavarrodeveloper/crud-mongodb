// src/domain/repositories/UserRepository.ts

export interface UserRepository {
  getUsers: <T>() => Promise<T | any>;
  getUsersById: <T>(id: string) => Promise<T | any>;
  deleteUsersById: <T>(id: string) => Promise<T | any>;
}
