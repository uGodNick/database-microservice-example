import { Comment } from './comment';

export interface Emoji {
  id: number;
  icon: string;
  count: string;
  comments: Comment[];
}
