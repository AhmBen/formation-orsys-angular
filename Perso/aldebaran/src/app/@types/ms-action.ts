import { ActionTypes } from '../services/action-types.enum';

export interface MsAction {
  type: ActionTypes;
  data: any;
  result?: any;

}
