import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {IMovie} from '../../types';

export const BASEURL = 'https://image.tmdb.org/t/p/w500';

interface Props {
  item: IMovie;
  onItemClick: (itemId: number) => void;
}

const ItemList: React.FC<Props> = props => {
  const {item, onItemClick} = props;
  const {poster_path, title, release_date, id} = item;
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{justifyContent: 'space-around'}}>
            <Text>{release_date}</Text>
          </View>
          <View>
            <Button title="Book" onPress={() => onItemClick(id)} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  miniLogo: {
    width: 80,
    height: 80,
  },
});
