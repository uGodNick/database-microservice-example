import { RegionTable } from 'src/models/region.model';
import { Region } from 'src/types/region';
import { convertToChannel } from '../channel-table-converter';

export const convertToRegion = (region: RegionTable): Region => {
  return {
    id: region.id,
    name: region.name,
    timezone: region.timezone,
    channels: region.channels?.map((channel) => convertToChannel(channel))
  };
};
