import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { EmojiTable } from './emoji.table';
import { CommentTable } from './comment.model';

@Table({ tableName: 'CommentEmojis' })
export class CommentEmojisTable extends Model<CommentEmojisTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => EmojiTable)
  @Column({ type: DataType.INTEGER })
  emojiId: number;

  @ForeignKey(() => CommentTable)
  @Column({ type: DataType.INTEGER })
  commentId: number;
}
