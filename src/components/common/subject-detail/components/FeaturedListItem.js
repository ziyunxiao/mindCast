// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';

import DefaultButton from '~/components/common/DefaultButton';
import ReviewStars from '~/components/common/ReviewStars';
import AuthorInfo from '../../AuthorInfo';

const Wrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('40%')}px;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
  background-color: ${({ theme }) => theme.colors.lightSecondaryColor};
  border-radius: 4px;
`;

const UpperContent = styled(View)`
  width: 100%;
  flex-direction: row;
`;

const BottomContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContent = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('72%')}px
  padding-left: ${({ theme }) => theme.metrics.mediumSize}px;
`;

const PodcastImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('16%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  border-radius: 4px;
`;

const TextWrapper = styled(View)`
  width: 60%;
`;

const PodcastTitle = styled(Text).attrs({
  numberOfLines: 3,
})`
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: CircularStd-Bold;
`;

type AuthorProps = {
  thumbnailImageURL: string,
  name: string,
};

type Props = {
  podcastImage: string,
  author: AuthorProps,
  onPress: Function,
  isFirst: boolean,
  stars: number,
  title: string,
};

const FeaturedListitem = ({
  podcastImage,
  onPress,
  author,
  stars,
  title,
  isFirst,
}: Props): Object => (
  <Wrapper>
    <UpperContent>
      <PodcastImage
        uri={podcastImage}
      />
      <TextContent>
        <PodcastTitle>{title}</PodcastTitle>
        <ReviewStars
          shouldShowReviewsText={false}
          stars={stars}
          isSmall
        />
      </TextContent>
    </UpperContent>
    <BottomContent>
      <TextWrapper>
        <AuthorInfo
          imageURL={author.thumbnailImageURL}
          name={author.name}
          numberOfLines={1}
          textColor="white"
        />
      </TextWrapper>
      <DefaultButton
        onPress={onPress}
        size="small"
        text="MORE"
      />
    </BottomContent>
  </Wrapper>
);

export default FeaturedListitem;
