import api from '../../utils/api';
import { SignupRq } from '../../rqrs/auth/signupRqrs';

export const signup = async (rq: SignupRq) => {
  return await api.post('/auth/signup', rq);
}