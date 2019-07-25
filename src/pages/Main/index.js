import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PodcastActions from "../../store/ducks/podcast";

import {
  Container,
  PodcastList,
  PageTitle,
  Podcast,
  Cover,
  Info,
  Title,
  Count
} from "./styles";

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  handPodcastPress = podcast => {
    const { navigation } = this.props;

    navigation.navigate("Podcast", { podcast });
  };

  render() {
    const { podcasts } = this.props;

    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Pordcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handPodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PodcastActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
