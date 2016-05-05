interface ISimonGameInfo {
  playing: boolean;
  score: number;
  gameColor: string;
  lastColor: string;
  sequenceIndex: number;
}

interface ISimonScoreInfo {
  date?: any;
  score: number;
  color: string;
  playingTime: number;
}
