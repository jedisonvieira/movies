export interface intervalProducer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}
