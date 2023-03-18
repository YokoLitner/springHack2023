import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import Role from 'src/modules/user/types/role.enum';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsString()
  department?: string;

  @IsString()
  position?: string;

  @IsString()
  access_level?: Role = Role.User;
}

export default RegisterDto;
