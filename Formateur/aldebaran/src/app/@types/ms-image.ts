import { MsComment } from './ms-comment';

export interface MsImage {
  id?: number;
  title: string;
  url: string;
  descritpion: string;
  comments?: MsComment[];
  // comments?: Array<MsComment>;
}
