import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'carousel-with-pagination-rn';

import { GradientBackground, HorizontalSlider, MoviePoster } from '../components';
import { useMovies } from '../hooks';

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>

      <ScrollView>

        <View style={{ marginTop: top + 20 }}>

          {/* Carousel principal */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
            />
          </View>

          {/* Péliculas populares */}
          <HorizontalSlider title='Popular' movies={popular} />
          <HorizontalSlider title='Top Rated' movies={topRated} />
          <HorizontalSlider title='upcoming' movies={upcoming} />

        </View>
      </ScrollView>


    </GradientBackground>

  )
}