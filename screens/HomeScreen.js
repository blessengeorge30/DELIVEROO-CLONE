import React from 'react'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


import { Image, SafeAreaView, StyleSheet,Textinput, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon } from "react-native-heroicons/solid";
// import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <SafeAreaView >
    
        {/* header */}
      <View style={{ flexDirection: 'row', paddingBottom: 3, alignItems: 'center', paddingHorizontal: 10, marginTop: 5 }}>
        <Image source={require('../assets/delivery.jpeg')} style={styles.headerimg} />
        <View style={styles.spacing}>
          <Text style={styles.txt1}>Deliver Now! </Text>
          <Text style={styles.txt2}>Current Location  <ChevronDownIcon size={20} color='#00ccbb' /></Text>
        </View>
        <TouchableOpacity style={{marginHorizontal:0}}> 
          <UserIcon size={35} color='#00ccbb'/>
        </TouchableOpacity>
        </View>
         {/* Search */}
         <View style={{flexDirection:'row',alignItems:'center',paddingBottom:2,paddingHorizontal:10,marginTop:10,marginBottom:8}}>
            <View style={{flexDirection:'row',backgroundColor:'#CFCFCF',borderRadius:5,alignContent:'center',paddingHorizontal:5,width:370 }}>
             <Image source={require('../assets/searchicon.png')}style={styles.headerimg1} />
              <TextInput placeholder='Restaurants and Cuisines'/>
            </View>
            <TouchableOpacity style={{marginHorizontal:12}}>
            <AdjustmentsVerticalIcon  color='#00ccbb'/>
            </TouchableOpacity>
         </View>
         
         {/* body */}
         <ScrollView style={{backgroundColor:'#E7E7E7',height:1500}}>
          {/* categories */}
        
          <Categories/>

          <View style= {{marginHorizontal:5}}>
          {/* Featured rows */}
          <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners "
          imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/04/sushi-platter-1.jpg'
          title1="Yo! Sushi"
          rating={4.5}
          genre="Japenese"
          address="Croydon,London"
          short_description='this is a test description '
          dish={[]}
          long={20}
          lat={0}
          
          />
          {/* Tasty Discounts */}
           <FeaturedRow
           id="1234"
          title="Tasty discounts"
          description="everyone has been enjoying the juciy discounts "
          imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/04/plate-of-delicious-beef-tacos.jpg'
        
          
          />
          {/* Offers near you */}
           <FeaturedRow
           id="12345"
          title="Offers near you!"
          description="why not support your local restaurats tonight!"
       
          />

</View>
     
         </ScrollView>
        
       

      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',

  },
  spacing: {
    marginLeft: 10,
    flex: 1
  },

  txt1: {
    fontWeight: 'bold',
    color: 'grey'
  },
  txt2: {
    fontWeight: 'bold',
    fontSize: 20
  },


  headerimg: {

    height: 35,
    width: 35,
    borderRadius: 50,
    marginHorizontal: 0
  },
  headerimg1: {

    height: 20,
    width: 20,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical:10
  },
})


export default HomeScreen;