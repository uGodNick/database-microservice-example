import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ChannelRegionsTable } from './channel-regions.model';
import { ChannelTable } from './channel.model';

@Table({ tableName: 'Region' })
export class RegionTable extends Model<RegionTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  timezone: string;

  @BelongsToMany(() => ChannelTable, () => ChannelRegionsTable)
  channels: ChannelTable[];
}
