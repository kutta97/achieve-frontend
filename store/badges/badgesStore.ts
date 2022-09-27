import { IBadge } from '@vo/badges/IBadge';
import { makeObservable, observable } from 'mobx';

export class BadgesStore {
  badgeList: IBadge[];

  constructor() {
    makeObservable(this, {
      badgeList: observable,
    });
    this.loadBadgeList();
  }

  loadBadgeList() {
    this.getBadgeList().then();
  }

  async getBadgeList() {
    try {
      this.badgeList = [
        {
          id: 1,
          title: 'Cactus Badge',
          imgSrc: '/assets/test/badges/icon_badge_cactus.svg',
          color: '#C6E3FF',
          description: '목표로 한 시험점수 어치브 1개를 달성했어요!',
        },
        {
          id: 2,
          title: 'Star Badge',
          imgSrc: '/assets/test/badges/icon_badge_star.svg',
          color: '#B5EBD6',
          description: '첫 시험 목표 어치브를 추가했어요!',
        },
        {
          id: 3,
          title: 'Diamond Badge',
          imgSrc: '/assets/test/badges/icon_badge_diamond.svg',
          color: '#E5C9F3',
          description: '시험 목표 어치브를 5개 추가했어요',
        },
        {
          id: 4,
          title: 'Heart Badge',
          imgSrc: '/assets/test/badges/icon_badge_heart.svg',
          color: '#FFD0E0',
          description: '해빗 트래커를 3일 이상 완료했어요',
        },
        {
          id: 5,
          title: 'Sun Badge',
          imgSrc: '/assets/test/badges/icon_badge_sun.svg',
          color: '#FFF1A3',
          description: '목표로 한 시험점수 어치브 1개를 달성했어요!',
        },
      ];
    } catch (e) {
      console.log(e);
    }
  }
}
