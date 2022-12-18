export interface SidebarGoal {
  id: number;
  title: string;
}

export interface Sidebar {
  name?: string;
  image?: string;
  description?: string;
  goalCount?: number;
  goalList?: SidebarGoal[];
  badgeCount?: number;
  badgeList?: string[];
}

export interface SidebarRs {
  sidebar?: Sidebar;
}
