import { LoginRq, LoginRs } from '../../rqrs/auth/loginRqrs';
import api from '../../utils/api';

export const login = async (rq: LoginRq) => {
  return await api.post<LoginRs>('/auth/login', rq);
};
