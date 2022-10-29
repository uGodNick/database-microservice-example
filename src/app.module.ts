import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelModule } from './modules/channel/channel.module';
import { NewsModule } from './modules/news/news.module';
import { UserModule } from './modules/user/user.module';
import { TagModule } from './modules/tag/tag.module';
import { CommentModule } from './modules/comment/comment.module';
import { EmojiModule } from './modules/emoji/emoji.module';

@Module({
  imports: [ChannelModule, NewsModule, UserModule, TagModule, CommentModule, EmojiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
