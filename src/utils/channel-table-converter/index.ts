import { ChannelTable } from 'src/models/channel.model';
import { Channel } from 'src/types/channel';
import { convertToNews } from '../news-table-converter';
import { convertToPlatform } from '../platform-table-converter';
import { convertToRegion } from '../region-table-converter';
import { convertToTag } from '../tag-table-converter';

export const convertToChannel = (channel: ChannelTable): Channel => {
  return {
    id: channel.id,
    name: channel.name,
    platformId: channel.platformId,
    subscribers: channel.subscribers,
    url: channel.url,
    isUseToParse: channel.isUseToParse,
    news: channel.news?.map((news) => convertToNews(news)),
    platform: channel.platform ? convertToPlatform(channel.platform) : undefined,
    tags: channel.tags?.map((tag) => convertToTag(tag)),
    regions: channel.regions?.map((region) => convertToRegion(region))
  };
};
