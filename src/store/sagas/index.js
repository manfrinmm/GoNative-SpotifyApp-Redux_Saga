import { all, takeLatest } from "redux-saga/effects";

import { PodcastsTypes } from "../ducks/podcast";
import { PlayerTypes } from "../ducks/player";

import { init, setPodcast, play, pause, next, prev } from "./player";
import { load } from "./podcasts";

export default function* rootSaga() {
  yield all([
    init(),

    takeLatest(PodcastsTypes.LOAD_REQUEST, load),

    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREV, prev)
  ]);
}
