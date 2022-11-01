import { Channel } from './channel';
import { News } from './news';

export interface Tag {
  id: number;
  name: string;
  channels?: Channel[];
  news?: News[];
}
