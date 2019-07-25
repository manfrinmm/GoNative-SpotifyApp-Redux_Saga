import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  background: #111;
  height: ${74 + getBottomSpace()}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px ${getBottomSpace()}px;
`;

export const CoverBackground = styled.Image.attrs({
  blurRadius: 5
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0.2;
`;

export const EpisodeInfo = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Author = styled.Text`
  font-size: 14px;
  color: #c4c4c4;
  margin-top: 3px;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  }
})`
  margin-left: 10px;
`;

export const ControlIcon = styled(Icon).attrs({
  color: "#FFF",
  size: 32
})``;

// export const PodcastDetails = styled.View`
//   padding: 0 0 20px;
//   align-items: center;
//   padding-top: ${getStatusBarHeight() + 30}px;
// `;

// export const Background = styled.ImageBackground`
//   position: absolute;
//   opacity: 0.2;
//   width: 100%;
//   height: ${340 + getStatusBarHeight()}px;
// `;

// export const BackButton = styled.TouchableOpacity.attrs({
//   //Aumenta a area para pressionar o botão
//   hitSlop: { top: 15, left: 15, right: 30, bottom: 20 }
// })`
//   position: absolute;
//   left: 30px;
//   top: ${getStatusBarHeight() + 30}px;
// `;

// export const PodcastTitle = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   color: #fff;
//   margin-top: 20px;
// `;

// export const PlayButton = styled.TouchableOpacity.attrs({
//   activeOpacity: 0.6
// })`
//   height: 50px;
//   background: #1db954;
//   margin: 30px 40px 0;
//   border-radius: 25px;

//   align-self: stretch;
//   align-items: center;
//   justify-content: center;
// `;

// export const PlayButtonText = styled.Text`
//   color: #fff;
//   font-weight: bold;
//   font-size: 16px;
//   letter-spacing: 1.5;
// `;
