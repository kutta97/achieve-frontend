import { AUTH } from '@consts/LocalStorage';
import { action, makeObservable } from 'mobx';

import { login } from '../../../api/auth/login';
import { LoginRq } from '../../../rqrs/auth/loginRqrs';
import { setStorage } from '../../../utils/localStorage';

export class LoginStore {
  constructor() {
    makeObservable(this, {
      login: action,
    });
  }

  async login(rq: LoginRq) {
    try {
      const data = (await login(rq)).data;
      if (!data) {
        console.error('login error');
        return;
      }
      setStorage(AUTH, JSON.stringify(data));
      location.href = '/overview';
    } catch (e) {
      console.error(e);
    }
  }
}
