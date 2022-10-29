import { Module } from '@nestjs/common';
import { EmojiController } from './emoji.controller';
import { EmojiService } from './emoji.service';

@Module({
  controllers: [EmojiController],
  providers: [EmojiService]
})
export class EmojiModule {}
