import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, '..', '.env'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,

      models: [],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true,
      },
    }),
    ,
    ChannelModule,
    NewsModule,
    UserModule,
    TagModule,
    CommentModule,
    EmojiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
