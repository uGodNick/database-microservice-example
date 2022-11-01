import { Channel } from './channel';
import { Tag } from './tag';

export interface News {
  id: number;
  channelId: number;
  title: string;
  content: string;
  imageUrl: string;
  views: number;
  channel?: Channel;
  tags?: Tag[];
}
