import { Table, Column, Model, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { ChannelTable } from './channel.model';
import { CommentTable } from './comment.model';
import { UserChannelsTable } from './user-channels.model';

@Table({ tableName: 'User' })
export class UserTable extends Model<UserTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  passwordHash: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  imageUrl: string;

  @HasMany(() => CommentTable)
  comments: CommentTable[];

  @BelongsToMany(() => ChannelTable, () => UserChannelsTable)
  favoriteChannels: ChannelTable[];
}
