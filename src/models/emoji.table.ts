import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { CommentEmojisTable } from './comment-emojis.model';
import { CommentTable } from './comment.model';

@Table({ tableName: 'Emoji' })
export class EmojiTable extends Model<EmojiTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  icon: string;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  count: string;

  @BelongsToMany(() => CommentTable, () => CommentEmojisTable)
  comments: CommentTable[];
}
