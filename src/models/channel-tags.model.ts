import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { ChannelTable } from './channel.model';
import { TagTable } from './tag.model';

@Table({ tableName: 'ChannelTags' })
export class ChannelTagsTable extends Model<ChannelTagsTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => ChannelTable)
  @Column({ type: DataType.INTEGER })
  channelId: number;

  @ForeignKey(() => TagTable)
  @Column({ type: DataType.INTEGER })
  tagId: number;
}
