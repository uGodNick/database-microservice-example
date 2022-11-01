import { EmojiTable } from 'src/models/emoji.table';
import { Emoji } from 'src/types/emoji';
import { convertToComment } from '../comment-table-converter';

export const convertToEmoji = (emoji: EmojiTable): Emoji => {
  return {
    id: emoji.id,
    icon: emoji.icon,
    count: emoji.count,
    comments: emoji.comments?.map((comment) => convertToComment(comment))
  };
};
