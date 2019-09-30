import { MsUser } from './ms-user';

export interface MsComment {
  id?: number;
  user: MsUser;
  text: string;
  date: number;
}
