import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { ChannelTable } from './channel.model';
import { RegionTable } from './region.model';

@Table({ tableName: 'ChannelRegions' })
export class ChannelRegionsTable extends Model<ChannelRegionsTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => ChannelTable)
  @Column({ type: DataType.INTEGER })
  channelId: number;

  @ForeignKey(() => RegionTable)
  @Column({ type: DataType.INTEGER })
  regionId: number;
}
