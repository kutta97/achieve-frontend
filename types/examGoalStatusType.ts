import { BulletColor } from '@components/common/text/BulletTitle';

export enum ExamGoalStatusTypeEnum {
  ACHIEVING = 'Achieving...',
  ACHIEVED = 'Achieved!',
  FAILED = 'Failed',
}

export type ExamGoalStatusType = keyof typeof ExamGoalStatusTypeEnum;

export const getStateColor = (state: ExamGoalStatusType) => {
  switch (state) {
    case 'ACHIEVED':
      return BulletColor.PURPLE;
    case 'ACHIEVING':
      return BulletColor.GREEN;
    case 'FAILED':
      return BulletColor.RED;
  }
};
