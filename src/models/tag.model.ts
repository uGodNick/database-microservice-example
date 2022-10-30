import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { ChannelTagsTable } from './channel-tags.model';
import { ChannelTable } from './channel.model';
import { NewsTagsTable } from './news-tags.model';
import { NewsTable } from './news.model';

@Table({ tableName: 'Tag' })
export class TagTable extends Model<TagTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;

  @BelongsToMany(() => ChannelTable, () => ChannelTagsTable)
  channels: ChannelTable[];

  @BelongsToMany(() => NewsTable, () => NewsTagsTable)
  news: NewsTable[];
}
