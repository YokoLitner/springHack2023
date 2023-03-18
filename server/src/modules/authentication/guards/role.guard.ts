import Role from '../../user/types/role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import JwtAuthenticationGuard from './jwt-authentication.guard';

const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;

      return user?.access_level.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
};

export default RoleGuard;
