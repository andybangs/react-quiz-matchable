import { SET_GAME_STATE, TICK, RESET, SELECT_ITEM } from '../constants/quiz';

export function setGameState(state) {
  return {
    type: SET_GAME_STATE,
    gameState: state,
  };
}

export function tick() {
  return {
    type: TICK,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function selectItem(mid, id) {
  return {
    type: SELECT_ITEM,
    mid,
    id,
  };
}
