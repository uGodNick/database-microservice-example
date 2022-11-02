export class CreateNewsDto {
  channelId: number;
  title: string;
  content: string;
  imageUrl?: string;
  views?: number;
}
