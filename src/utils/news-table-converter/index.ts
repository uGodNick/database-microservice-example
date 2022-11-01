import { NewsTable } from 'src/models/news.model';
import { News } from 'src/types/news';
import { convertToChannel } from '../channel-table-converter';
import { convertToTag } from '../tag-table-converter';

export const convertToNews = (news: NewsTable): News => {
  return {
    id: news.id,
    channelId: news.channelId,
    title: news.title,
    content: news.content,
    imageUrl: news.imageUrl,
    views: news.views,
    channel: convertToChannel(news.channel),
    tags: news.tags?.map((tag) => convertToTag(tag))
  };
};
