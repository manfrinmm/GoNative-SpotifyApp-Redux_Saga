import { createReducer, createActions } from "reduxsauce"; //facilita a criação
import Immutable from "seamless-immutable"; //mantem a variavel imutavel

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  setPodcastRequest: ["podcast", "episodeId"],
  setPodcastSuccess: ["podcast"],
  setCurrent: ["episodeId"],
  play: null,
  pause: null,
  next: null,
  prev: null,
  reset: null
});
//Types:{ LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
//Creators:
/**
 * loadRequest:()=>({ type: "LOAD_REQUEST" })
 * loadSuccess:(data)=>({ type: "LOAD_SUCCESS", data })
 * loadFailure:()=>({ type: "LOAD_FAILURE" })
 */

export const PlayerTypes = Types;
export default Creators; //exporta as funções

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  podcast: null, //podcast atual
  current: null, //episodio atual,
  playing: false
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) =>
    state.merge({ podcast, current: podcast.tracks[0].id }),
  [Types.SET_CURRENT]: (state, { episodeId }) =>
    state.merge({ current: episodeId }),
  [Types.PLAY]: state => state.merge({ playing: true }),
  [Types.PAUSE]: state => state.merge({ playing: false }),
  [Types.RESET]: state =>
    state.merge({ podcast: null, current: null, playing: false })
});
