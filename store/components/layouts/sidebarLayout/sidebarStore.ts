import { ISidebarProfile } from '@vo/layouts';
import { action, makeObservable, observable } from 'mobx';

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
      this.sidebarProfile = {
        name: 'nickname',
        description:
          'hello world! from seoul\n' + 'I wanna be an awsome student.',
        goalCount: 2,
        goalList: ['소프트웨어공학 B+ 이상', '운전면허시험 합격'],
        badgeCount: 3,
        badgeList: [],
      };
    } catch (e) {
      console.log(e);
    }
  }
}
