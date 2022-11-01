import { Channel } from './channel';

export interface Platform {
  id: number;
  url: string;
  urlToParse: string;
  name: string;
  icon: string;
  channels?: Channel[];
}
