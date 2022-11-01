import { News } from './news';
import { Platform } from './platform';
import { Region } from './region';
import { Tag } from './tag';

export interface Channel {
  id: number;
  name: string;
  platformId: number;
  subscribers: number;
  url: string;
  isUseToParse: boolean;
  news?: News[];
  platform?: Platform;
  tags?: Tag[];
  regions?: Region[];
}
