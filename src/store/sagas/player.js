import { call, put, select, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import TrackPlayer from "react-native-track-player";

import PlayerActions from "../ducks/player";

function* trackChanged() {
  //emiter deve ser chamado sempre que haver um novo resultado do EventListener
  //channel sempre recebe um valor quando há uma alterenão no ''
  const channel = eventChannel(emitter => {
    const onTrackChange = TrackPlayer.addEventListener(
      "playback-track-changed",
      emitter
    );

    //quando o eventChannel deixar de existir, retorna isso, para que não haja "listen" desnecessario
    return () => onTrackChange.remove();
  });

  try {
    while (true) {
      //pegar o valor de channel
      const { nextTrack } = yield take(channel);

      yield put(PlayerActions.setCurrent(nextTrack));
    }
  } finally {
    channel.close();
  }
}

export function* init() {
  yield call(TrackPlayer.setupPlayer);

  // TrackPlayer.addEventListener("playback-track-changed", console.tron.log);
  TrackPlayer.addEventListener("playback-state", () => {});
}

export function* setPodcast({ podcast, episodeId }) {
  const currentPodcast = yield select(state => state.player.podcast);

  //trocando de podcast
  if (!currentPodcast || podcast.id !== currentPodcast.id) {
    yield call(TrackPlayer.stop);
    yield call(TrackPlayer.reset);

    //add as tracks na fila do player
    yield call(TrackPlayer.add, [...podcast.tracks]);
    yield put(PlayerActions.setPodcastSuccess(podcast));
  }

  //trocando de episodio
  if (episodeId) {
    yield call(TrackPlayer.skip, episodeId);
    yield put(PlayerActions.setCurrent(episodeId));
  }

  //começa a tocar
  yield put(PlayerActions.play());

  yield call(trackChanged);
}

export function* play() {
  yield call(TrackPlayer.play);
}

export function* pause() {
  yield call(TrackPlayer.pause);
}

export function* prev() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(
    episode => episode.id === player.current
  );

  if (player.podcast.tracks[currentIndex - 1]) {
    yield call(TrackPlayer.skipToPrevious);
    yield put(PlayerActions.play());
  }
}

export function* next() {
  const player = yield select(state => state.player);
  const currentIndex = player.podcast.tracks.findIndex(
    episode => episode.id === player.current
  );

  if (player.podcast.tracks[currentIndex + 1]) {
    yield call(TrackPlayer.skipToNext);
    yield put(PlayerActions.play());
  }
}
