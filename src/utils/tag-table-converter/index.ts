import { TagTable } from 'src/models/tag.model';
import { Tag } from 'src/types/tag';
import { convertToChannel } from '../channel-table-converter';
import { convertToNews } from '../news-table-converter';

export const convertToTag = (tag: TagTable): Tag => {
  return {
    id: tag.id,
    name: tag.name,
    channels: tag.channels?.map((channel) => convertToChannel(channel)),
    news: tag.news?.map((news) => convertToNews(news))
  };
};
