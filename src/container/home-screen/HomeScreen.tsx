import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {IMovie} from './../../types';
import {getPopularMovie} from './../../api';
import {ItemList} from './../../component';

interface Props {
  navigation: any;
}

//start
const HomeScreen: React.FC<Props> = props => {
  const [movieList, setMovieList] = useState<IMovie>();
  const [filteredMovieList, setFilteredMovieList] = useState<IMovie>();
  const [searchKey, setSearchKey] = useState();

  const {navigation} = props;

  useEffect(() => {
    (async () => {
      await getMovieList();
    })();
  }, []);

  const getMovieList = async () => {
    let list;

    const {response} = await getPopularMovie();
    list = response || [];
    setMovieList(list.results);
    setFilteredMovieList(list.results);
  };

  const onItemClick = (itemId: number) => {
    console.log(itemId);
    navigation.navigate('DetailScreen', {
      selectedItem: itemId,
    });
  };

  const onTextInput = (text: string) => {
    setSearchKey(text);
    if (searchKey) {
      if (searchKey === null) {
        setFilteredMovieList(movieList);
        return;
      }
      let filterList = movieList.filter(item => {
        if (item && searchKey) {
          return item.title.startsWith(searchKey);
        }
      });
      setFilteredMovieList(filterList);
      return;
    }
  };

  return (
    <View>
      <View>
        <TextInput
          editable
          maxLength={40}
          onChangeText={text => onTextInput(text)}
          placeholder={'Search Here'}
        />
      </View>
      <View>
        {movieList && (
          <FlatList
            data={filteredMovieList}
            renderItem={(item: any, index: number) => (
              <ItemList
                item={item.item}
                onItemClick={onItemClick}
                key={index}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
