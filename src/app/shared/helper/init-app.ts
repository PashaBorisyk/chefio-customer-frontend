import {AuthService} from '../service/auth.service';

export function initApp(authService: AuthService) {
  return () => {
    return new Promise(resolve => {
        authService.init()
          .subscribe(user => authService.setUserValue(user))
          .add(resolve);
    });
  };
}
