import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'

const CategoryCards = ({imgUrl,title}) => {
  return (
    <TouchableOpacity style={{marginRight:15,marginTop:15}}>
        <Image source={{
            uri:imgUrl
        }} style={{height:100,width:100,borderRadius:10}}/>
      <Text style={{position:'absolute',bottom:1,left:1,color:'white',fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({

})
export default CategoryCards