import { ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import CategoryCards from '../components/CategoryCards'

const Categories = () => {
    return (
        <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10
        }}
        
        horizontal
        showsHorizontalScrollIndicator={false}>

            {/* Categories card */}
            <CategoryCards imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/07/fresh-fruit-platter.jpg' title='Testing 1'/>
            <CategoryCards imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg' title='Testing 2'/>
            <CategoryCards imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/08/sausage-rolls.jpg' title='Testing 3'/>
            <CategoryCards imgUrl='https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg' title='Testing 4'/>         

           
        </ScrollView>
    )
}



const styles = StyleSheet.create({


})
export default Categories