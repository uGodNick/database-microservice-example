import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

// controllers and services
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { ChannelModule } from './modules/channel/channel.module';
import { NewsModule } from './modules/news/news.module';
import { UserModule } from './modules/user/user.module';
import { TagModule } from './modules/tag/tag.module';
import { CommentModule } from './modules/comment/comment.module';
import { EmojiModule } from './modules/emoji/emoji.module';

// Tables
import { UserTable } from './models/user.model';
import { UserChannelsTable } from './models/user-channels.model';
import { TagTable } from './models/tag.model';
import { RegionTable } from './models/region.model';
import { PlatformTable } from './models/platform.model';
import { NewsTable } from './models/news.model';
import { NewsTagsTable } from './models/news-tags.model';
import { EmojiTable } from './models/emoji.table';
import { CommentTable } from './models/comment.model';
import { CommentEmojisTable } from './models/comment-emojis.model';
import { ChannelTable } from './models/channel.model';
import { ChannelTagsTable } from './models/channel-tags.model';
import { ChannelRegionsTable } from './models/channel-regions.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '..', '.env')
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,

      models: [
        UserTable,
        UserChannelsTable,
        TagTable,
        RegionTable,
        PlatformTable,
        NewsTable,
        NewsTagsTable,
        EmojiTable,
        CommentTable,
        CommentEmojisTable,
        ChannelTable,
        ChannelTagsTable,
        ChannelRegionsTable
      ],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true
      }
    }),
    ChannelModule,
    NewsModule,
    UserModule,
    TagModule,
    CommentModule,
    EmojiModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
