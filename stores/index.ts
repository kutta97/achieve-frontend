import { createContext, useContext } from "react";
import { GoalStore } from "./goals/goalStore";

export class RootStore {

  goalStore: GoalStore;

  constructor() {
    this.goalStore = new GoalStore();
  }
}

const StoresContext = createContext(new RootStore());

export const useStores = () => useContext(StoresContext);