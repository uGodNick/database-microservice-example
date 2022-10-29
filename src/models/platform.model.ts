import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ChannelTable } from './channel.model';

@Table({ tableName: 'Platform' })
export class PlatformTable extends Model<PlatformTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  url: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  urlToParse: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  icon: string;

  @HasMany(() => ChannelTable)
  channels: ChannelTable[];
}
