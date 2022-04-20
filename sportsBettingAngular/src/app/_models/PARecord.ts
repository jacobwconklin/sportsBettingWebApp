
import {PAType} from './PAType';
import {User} from './user';

export class PARecord {

  calories: number;
  minutes: number;
  steps: number;
  activityType: PAType;
  createdDate: Date;
  exerciseDate: Date;
  createdBy: User;
  createdByUsername: string;
  }

