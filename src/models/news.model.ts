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
import { ChannelTable } from './channel.model';
import { NewsTagsTable } from './news-tags.model';
import { TagTable } from './tag.model';

@Table({ tableName: 'News' })
export class NewsTable extends Model<NewsTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => ChannelTable)
  @Column({ type: DataType.INTEGER, allowNull: false })
  channelId: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  imageUrl: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  views: number;

  @BelongsTo(() => ChannelTable)
  channel: ChannelTable;

  @BelongsToMany(() => TagTable, () => NewsTagsTable)
  tags: TagTable[];
}
