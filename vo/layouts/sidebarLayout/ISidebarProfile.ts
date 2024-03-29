import { SidebarGoal } from '../../../rqrs/sidebar/SidebarRqrs';

export interface ISidebarProfile {
  name?: string;
  image?: string;
  description?: string;
  goalCount?: number;
  goalList?: SidebarGoal[];
  badgeCount?: number;
  badgeList?: string[];
}
