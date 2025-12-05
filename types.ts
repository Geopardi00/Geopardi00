export type GameState = 'intro' | 'playing' | 'finished';

export interface LevelProps {
  onComplete: () => void;
  hintUsed: boolean;
  onUseHint: () => void;
}

export interface PuzzleState {
  isSolved: boolean;
  isError: boolean;
  value: string;
}