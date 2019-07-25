import TrackPlayer from "react-native-track-player";
import store from "../store"; // para disparar actions diretamente

import PlayerAction from "../store/ducks/player";

//Chamar cada função "declarada" no capabilities
export default async () => {
  TrackPlayer.addEventListener("remote-play", () => {
    store.dispatch(PlayerAction.play());
  });
  TrackPlayer.addEventListener("remote-pause", () => {
    store.dispatch(PlayerAction.pause());
  });
  TrackPlayer.addEventListener("remote-next", () => {
    store.dispatch(PlayerAction.next());
  });
  TrackPlayer.addEventListener("remote-previous", () => {
    store.dispatch(PlayerAction.prev());
  });
  TrackPlayer.addEventListener("remote-stop", () => {
    store.dispatch(PlayerAction.reset());
  });
};
