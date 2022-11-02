export class CreateChannelDto {
  readonly name: string;
  readonly platformId: number;
  readonly subscribers: number;
  readonly url: string;
  readonly isUseToParse?: boolean;
}
