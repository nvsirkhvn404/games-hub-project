interface GameStoreLink {
  id: number;
  game_id: number;
  store_id: number;
  url: string;
}

export default interface GameStoreResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GameStoreLink[];
}
