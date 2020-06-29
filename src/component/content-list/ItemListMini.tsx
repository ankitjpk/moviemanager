import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {IMovie} from '../../types';

export const BASEURL = 'https://image.tmdb.org/t/p/w500';

interface Props {
  item: IMovie;
  onItemClick: (itemId: number) => void;
}

const ItemListMini: React.FC<Props> = props => {
  const {item, onItemClick} = props;
  const {poster_path, title, vote_average} = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 3,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        padding: 8,
      }}>
      <View>
        <Image
          style={styles.miniLogo}
          source={{
            uri: `${BASEURL}${poster_path}`,
          }}
        />
      </View>
      <View style={{flex: 1, marginLeft: 8}}>
        <View>
          <Text>{title}</Text>
        </View>
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
          <Text>Rating</Text>
          <Text>{vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemListMini;

const styles = StyleSheet.create({
  miniLogo: {
    width: 25,
    height: 25,
  },
});
