import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { TostrService } from '../services/tostr.service';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AuthService);
  const toaster = inject(TostrService)
  if (authStatus.isLoggined()) {
    return true;
  }else{
    toaster.showWarning("Operation denied")
    return false
  }
};
