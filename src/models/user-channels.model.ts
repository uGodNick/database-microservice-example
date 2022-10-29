import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { ChannelTable } from './channel.model';
import { UserTable } from './user.model';

@Table({ tableName: 'UserChannels' })
export class UserChannelsTable extends Model<UserChannelsTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserTable)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ForeignKey(() => ChannelTable)
  @Column({ type: DataType.INTEGER })
  channelId: number;
}
