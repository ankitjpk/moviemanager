import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {BASEURL} from './ItemList';

interface Props {}

const ItemListLine: React.FC<Props> = props => {
  const {item} = props;
  const {profile_path, character, name, job} = item;
  return (
    <View style={{borderWidth: 1, margin: 2, padding: 5}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={styles.miniLogo}
            source={{
              uri: `${BASEURL}${profile_path}`,
            }}
          />
        </View>
        <Text>{character ? character : job}</Text>
        <Text>{`(${name})`}</Text>
      </View>
    </View>
  );
};

export default ItemListLine;

const styles = StyleSheet.create({
  miniLogo: {
    width: 80,
    height: 80,
  },
});
