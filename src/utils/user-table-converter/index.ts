import { UserTable } from 'src/models/user.model';
import { User } from 'src/types/user';
import { convertToChannel } from '../channel-table-converter';
import { convertToComment } from '../comment-table-converter';

export const convertToUser = (user: UserTable): User => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    passwordHash: user.passwordHash,
    imageUrl: user.imageUrl,
    comments: user.comments?.map((comment) => convertToComment(comment)),
    favoriteChannels: user.favoriteChannels?.map((channel) => convertToChannel(channel))
  };
};
