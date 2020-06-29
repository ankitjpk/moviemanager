import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {BASEURL, ItemListLine, ItemListMini} from './../../component/';
import {
  getMovieDetails,
  getMovieReviews,
  getMovieCredits,
  getSimilarMovies,
} from './../../api';

interface Props {
  navigation: any;
}

const DetailScreen: React.FC<Props> = props => {
  const [movieDetail, setMovieDetail] = useState();
  const [movieReviews, setMovieReviews] = useState();
  const [movieCredit, setMovieCredit] = useState();
  const [similarMovie, setSimilarMovie] = useState();

  const {route} = props;
  const {selectedItem} = route.params;

  useEffect(() => {
    (async () => {
      const apiToRun: Promise<any>[] = [
        getMovieDetail(),
        getReviewsDetail(),
        getCreditsDetail(),
        getSimilarDetail(),
      ];

      await Promise.all(apiToRun);
    })();
  }, []);

  const getMovieDetail = async () => {
    let movieData;

    const {response} = await getMovieDetails(selectedItem);
    movieData = response || [];
    setMovieDetail(movieData);
  };

  const getReviewsDetail = async () => {
    let reviewData;

    const {response} = await getMovieReviews(selectedItem);
    reviewData = response || [];
    setMovieReviews(reviewData);
  };

  const getCreditsDetail = async () => {
    let creditData;

    const {response} = await getMovieCredits(selectedItem);
    creditData = response || [];
    setMovieCredit(creditData);
  };

  const getSimilarDetail = async () => {
    let similarMovieData;

    const {response} = await getSimilarMovies(selectedItem);
    similarMovieData = response || [];
    setSimilarMovie(similarMovieData);
  };

  // console.log(movieDetail);
  // console.log(movieReviews);
  // console.log(movieCredit);
  // console.log(similarMovie);

  return (
    <ScrollView style={{margin: 5}}>
      {/* Moview Details */}
      {movieDetail && (
        <View>
          <View>
            <View>
              <Image
                style={styles.miniLogo}
                source={{
                  uri: `${BASEURL}${movieDetail.poster_path}`,
                }}
              />
            </View>
          </View>
          <View>
            <Text>{movieDetail.original_title}</Text>
          </View>
          <View>
            <Text style={{fontSize: 20}}>OVERVIEW</Text>
            <Text style={{fontSize: 15}}>{`Rating ${
              movieDetail.vote_average
            }`}</Text>
            <Text>{movieDetail.overview}</Text>
          </View>
        </View>
      )}

      {/* Credits */}
      <View>
        <Text style={{fontSize: 20}}>CREDITS</Text>
        <Text style={{fontSize: 18}}>Castings</Text>
        <View>
          {movieCredit && (
            <FlatList
              data={movieCredit.cast}
              horizontal
              renderItem={(item: any, index: number) => (
                <ItemListLine item={item.item} key={index} />
              )}
            />
          )}
        </View>

        <Text style={{fontSize: 18}}>Crew</Text>
        <View>
          {movieCredit && (
            <FlatList
              data={movieCredit.crew}
              horizontal
              renderItem={(item: any, index: number) => (
                <ItemListLine item={item.item} key={index} />
              )}
            />
          )}
        </View>
      </View>

      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 20}}>Similar Movies</Text>
        <View>
          {similarMovie && (
            <FlatList
              data={similarMovie.results}
              horizontal
              renderItem={(item: any, index: number) => (
                <ItemListMini item={item.item} key={index} />
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  miniLogo: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
});
