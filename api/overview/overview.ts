import api from '../../utils/api';

export const overview = async () => {
  return await api.get('/overview');
};
