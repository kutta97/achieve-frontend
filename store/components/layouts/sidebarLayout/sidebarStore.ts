import { ISidebarProfile } from '@vo/layouts';
import { action, makeObservable, observable } from 'mobx';

import { sidebar } from '../../../../api/sidebar/sidebar';
import { SidebarRs } from '../../../../rqrs/sidebar/SidebarRqrs';

export class SidebarStore {
  sidebarProfile: ISidebarProfile;

  constructor() {
    makeObservable(this, {
      sidebarProfile: observable,
      loadSidebar: action,
    });

    this.loadSidebar();
  }

  loadSidebar() {
    this.getSidebar().then();
  }

  async getSidebar() {
    try {
      const rs = (await sidebar()).data;
      console.log('sidebar profile', rs);
      this.sidebarProfile = this.toSidebarVO(rs);
      console.log('sidebar profile', this.sidebarProfile);
    } catch (e) {
      console.log(e);
    }
  }

  toSidebarVO(vo: SidebarRs): ISidebarProfile {
    return {
      name: vo.sidebar.name,
      image: vo.sidebar.image,
      description: vo.sidebar.description,
      goalCount: vo.sidebar.goalCount,
      goalList: vo.sidebar.goalList,
      badgeCount: vo.sidebar.badgeCount,
      badgeList: vo.sidebar.badgeList,
    };
  }
}
