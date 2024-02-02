import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ArrowRightIcon, MapIcon, StarIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({
  title,
  description,
  imgUrl,
  title1,
  rating,
  genre,
  address,
  short_description,
  dish,
  long,
  lat, }) => {
  return (
    <View>
      <View style={{ marginTop: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4 }}>
        <Text style={styles.txt}>{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color="#00ccdd" />
        </TouchableOpacity>

      </View>
      <Text style={{ color: 'grey', paddingHorizontal: 5 }}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ padding: 8 }} >

        {/* Restaurats Cards */}
        <RestaurantCard
          id={123}
          imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/04/sushi-platter-1.jpg'
          title="Yo! Sushi"
          rating={4.5}
          genre="Japenese"
          address="SW 16 4SW"
          short_description='this is a test description '
          dish={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/04/plate-of-delicious-beef-tacos.jpg'
          title="Mexican Tacos "
          rating={4.8}
          genre="Mexican"
          address="Croydon,London"
          short_description='this is a test description '
          dish={[]}
          long={20}
          lat={0}
        />
         <RestaurantCard
          id={123}
          imgUrl='https://media.istockphoto.com/id/666710160/photo/grilled-chicken-legs-with-vegetable-skewers.jpg?s=1024x1024&w=is&k=20&c=VEvEeJC2ZL579NfS5KR0laH2RQg2dE_ZhCsCOtH915Q='
          title="BBQ & Grilled Chicken"
          rating={4.5}
          genre="Japenese"
          address="Croydon,London"
          short_description='this is a test description '
          dish={[]}
          long={20}
          lat={0}
        />



      </ScrollView>

    </View>
  )
}



const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 3
  },

})
export default FeaturedRow