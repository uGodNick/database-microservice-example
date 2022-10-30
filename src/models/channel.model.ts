import { Table, Column, Model, DataType, BelongsToMany, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ChannelRegionsTable } from './channel-regions.model';
import { ChannelTagsTable } from './channel-tags.model';
import { NewsTable } from './news.model';
import { PlatformTable } from './platform.model';
import { RegionTable } from './region.model';
import { TagTable } from './tag.model';

@Table({ tableName: 'Channel' })
export class ChannelTable extends Model<ChannelTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;

  @ForeignKey(() => PlatformTable)
  @Column({ type: DataType.INTEGER, allowNull: false })
  platformId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  subscribers: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  url: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isUseToParse: boolean;

  @HasMany(() => NewsTable)
  news: NewsTable[];

  @BelongsTo(() => PlatformTable)
  platform: PlatformTable;

  @BelongsToMany(() => TagTable, () => ChannelTagsTable)
  tags: TagTable[];

  @BelongsToMany(() => RegionTable, () => ChannelRegionsTable)
  regions: RegionTable[];
}
