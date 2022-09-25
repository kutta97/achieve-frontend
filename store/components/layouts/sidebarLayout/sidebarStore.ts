import { makeObservable } from 'mobx';

export class SidebarStore {
  constructor() {
    makeObservable(this, {});
  }
}
