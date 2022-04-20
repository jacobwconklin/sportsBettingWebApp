
export class Result {

  ID: string;
  HomeScore: number;
  AwayScore: number;
  OddType: string; // Acutally, this comes from an Enumerated type from the JSON, not sure if we want to convert
  // it to a string we can more easily read or basically adopt their enumerated type
  Final: boolean;
  FinalType: string; // Similarly, has a specific enum for Finished, Postponed, and Canceled
  BinaryScore: string; // Binary 1/0 for result Ex: "1-0" (HomeWin-AwayWin)
}
