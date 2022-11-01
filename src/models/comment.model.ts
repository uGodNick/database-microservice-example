import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { CommentEmojisTable } from './comment-emojis.model';
import { EmojiTable } from './emoji.table';
import { UserTable } from './user.model';

@Table({ tableName: 'Comment' })
export class CommentTable extends Model<CommentTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => UserTable)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @ForeignKey(() => CommentTable)
  @Column({ type: DataType.INTEGER, allowNull: true })
  repliedToCommentId: number;

  @BelongsTo(() => CommentTable)
  repliedToComment: CommentTable;

  @BelongsTo(() => UserTable)
  createdByUser: UserTable;

  @BelongsToMany(() => EmojiTable, () => CommentEmojisTable)
  emojis: EmojiTable[];
}
