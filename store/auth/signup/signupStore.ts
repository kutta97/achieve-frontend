import { action, makeObservable } from 'mobx';

import { signup } from '../../../api/auth/signup';
import { SignupRq } from '../../../rqrs/auth/signupRqrs';

export class SignupStore {
  constructor() {
    makeObservable(this, {
      signup: action,
    });
  }

  async signup(rq: SignupRq) {
    try {
      const data = await signup(rq);
      if (data.ok) {
        location.href = '/auth/login';
      }
    } catch (e) {
      console.error(e);
    }
  }
}
