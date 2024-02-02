import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { ArrowRightIcon, MapIcon, StarIcon } from 'react-native-heroicons/solid'
import React from 'react'


const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dish,
    long,
    lat,
}) => {
    return (
<View>
<TouchableOpacity style={{backgroundColor:'white',elevation:15, paddingHorizontal:2,paddingVertical:2,borderRadius:5,marginRight:10}}>
<Image
    source={{
        uri: imgUrl,
    }}
    style={{height:155,width:280,borderRadius:5}}/>
    <View style={{paddingHorizontal:4,paddingBottom:5}}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>
            {title}
        </Text>
        <View style={{flexDirection:'row' ,alignItems:'center',marginVertical:2}}>
         <StarIcon color="green" opacity={0.5} size={22}/>
         <Text style={{marginHorizontal:4,color:'grey'}}>
            <Text style={{color:'green'}}>{rating}</Text> . {genre}</Text>
        </View>

        <View style={{flexDirection:'row'}}>
        <MapIcon height={18} width={18} opacity={0.8}/>
        <Text style={{color:'grey' ,fontSize:12}}> near by . {address}</Text>
        </View>
    </View>
</TouchableOpacity>

        </View>

    )
}



const styles = StyleSheet.create({

})
export default RestaurantCard