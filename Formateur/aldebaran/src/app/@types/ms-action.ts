import { ActionTypes } from '../services/action-types.enum';

/**
 * Fonctional Action Required by the UI
 */
export interface MsAction {
  type: ActionTypes;
  data: any;
  result?: any;
}
