import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { NewsTable } from './news.model';
import { TagTable } from './tag.model';

@Table({ tableName: 'NewsTags' })
export class NewsTagsTable extends Model<NewsTagsTable> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ForeignKey(() => NewsTable)
  @Column({ type: DataType.INTEGER })
  newsId: number;

  @ForeignKey(() => TagTable)
  @Column({ type: DataType.INTEGER })
  tagId: number;
}
