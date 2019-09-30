import { MsComment } from './ms-comment';

export interface MsImage {
  id?: number;
  url: string;
  title: string;
  description: string;
  comments?: MsComment[];
}
