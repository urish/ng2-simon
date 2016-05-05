interface ISimonGameInfo {
  playing: boolean;
  score: number;
  gameColor: string;
  lastColor: string;
}

interface ISimonScoreInfo {
  date?: any;
  score: number;
  color: string;
  playingTime: number;
}
