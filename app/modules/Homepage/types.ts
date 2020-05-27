import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type HomepageAction = ActionType<typeof actions>;
export interface HomepageState {
  image: string;
}
