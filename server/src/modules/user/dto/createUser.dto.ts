import Role from '../types/role.enum';

class CreateUserDto {
  email: string;
  fullname: string;
  password: string;
  department?: string;
  position?: string;
  access_level?: Role = Role.User;
}

export default CreateUserDto;
