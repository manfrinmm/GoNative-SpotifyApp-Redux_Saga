import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: {
    // paddingTop: getStatusBarHeight(),
    paddingBottom: 30
  }
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  opacity: 0.2;
  width: 100%;
  height: ${340 + getStatusBarHeight()}px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  //Aumenta a area para pressionar o botão
  hitSlop: { top: 15, left: 15, right: 30, bottom: 20 }
})`
  position: absolute;
  left: 30px;
  top: ${getStatusBarHeight() + 30}px;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 50px;
  background: #1db954;
  margin: 30px 40px 0;
  border-radius: 25px;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: ${({ active }) => (active ? "#1db954" : "#FFF")};
  font-size: 16px;
`;

export const Author = styled.Text`
  color: #c4c4c4;
  font-size: 16px;
  margin-top: 3px;
`;
