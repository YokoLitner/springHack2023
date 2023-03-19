import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import * as bcrypt from 'bcrypt';
import changePasswordDto from './dto/changePassword.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email: email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getById(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    await this.userRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.userRepository.find();
  }

  async update(id: number, updateUser: UpdateUserDto) {
    const user = await this.getById(id);
    const { ...restUpdateUser } = updateUser;

    const updatedUserData = {
      ...user,
      ...restUpdateUser,
    };

    const updatedUser = await this.userRepository.save(updatedUserData);
    updatedUser.password = undefined;
    return updatedUser;
  }

  async delete(id: number) {
    const deleteResponse = await this.userRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException(
        `User with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async changePassword(changePassword: changePasswordDto) {
    const user = await this.getById(changePassword.id);
    const isPasswordMatching = await bcrypt.compare(
      changePassword.currentPassword,
      user.password,
    );
    if (isPasswordMatching) {
      const hashedPassword = await bcrypt.hash(changePassword.newPassword, 10);
      return this.update(changePassword.id, {
        ...user,
        password: hashedPassword,
      });
    } else {
      throw new HttpException(
        `Сurrent password is incorrect`,
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.userRepository.update(userId, {
      currentHashedRefreshToken,
    });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.getById(userId);

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  async removeRefreshToken(userId: number) {
    return this.userRepository.update(userId, {
      currentHashedRefreshToken: null,
    });
  }
}
