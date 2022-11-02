import { CommentTable } from 'src/models/comment.model';
import { Comment } from 'src/types/comment';
import { convertToEmoji } from '../emoji-table-converter';
import { convertToUser } from '../user-table-converter';

export const convertToComment = (comment: CommentTable): Comment => {
  return {
    id: comment.id,
    userId: comment.userId,
    content: comment.content,
    repliedToCommentId: comment.repliedToCommentId,
    repliedToComment: comment.repliedToComment
      ? convertToComment(comment.repliedToComment)
      : undefined,
    createdByUser: comment.createdByUser ? convertToUser(comment.createdByUser) : undefined,
    emojis: comment.emojis?.map((emoji) => convertToEmoji(emoji))
  };
};
