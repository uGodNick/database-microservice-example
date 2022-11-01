import { PlatformTable } from 'src/models/platform.model';
import { Platform } from 'src/types/platform';
import { convertToChannel } from '../channel-table-converter';

export const convertToPlatform = (platform: PlatformTable): Platform => {
  return {
    id: platform.id,
    url: platform.url,
    urlToParse: platform.urlToParse,
    name: platform.name,
    icon: platform.icon,
    channels: platform.channels?.map((channel) => convertToChannel(channel))
  };
};
