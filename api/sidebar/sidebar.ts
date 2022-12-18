import { SidebarRs } from '../../rqrs/sidebar/SidebarRqrs';
import api from '../../utils/api';

export const sidebar = async () => {
  return await api.get<SidebarRs>('/sidebar');
};
