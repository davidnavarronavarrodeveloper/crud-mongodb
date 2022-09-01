// src/infrastructure/repositories/userRepository.ts

import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { Http } from "../../domain/repositories/Http";
import { UserDTO } from "../http/dto/UserDTO";

const userRepositorio = (client: Http): UserRepository => ({
  getUsers: async () => {
    const users = await client.get<UserDTO>("/users");
    return users.map(
      (userDto: any): User => ({
        id: userDto.id,
        name: userDto.name,
        description: userDto.description,
        age: userDto.age,
      })
    );
  },

  getUsersById: async (id) => {
    const users = await client.get<UserDTO>("/users/" + id);
    return users.map(
      (userDto: any): User => ({
        id: userDto.id,
        name: userDto.name,
        description: userDto.description,
        age: userDto.age,
      })
    );
  },

  deleteUsersById: async (id) => {
    const response = await client.delete<UserDTO>("/users/" + id);
    return response;
  },
});

export default userRepositorio;
