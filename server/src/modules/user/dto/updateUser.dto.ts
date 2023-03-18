import { OmitType } from '@nestjs/mapped-types';
import CreateUserDto from './createUser.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'email',
] as const) {}
