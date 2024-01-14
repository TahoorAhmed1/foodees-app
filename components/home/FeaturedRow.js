import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './ResturentCard'

const FeaturedRow = ({ title, description, category }) => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

    return (
        <View className="mt-5">
            <View className=" flex-row items-center justify-between px-2">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
            </View>
            <Text className="px-2">{description}</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingHorizontal: 10,
                paddingTop: 20
            }}>

                {data?.map((_, index) => (

                    <RestaurantCard key={index} data={{ id: index, title: "!Yo Sushi", short_description: "tgdyhd hdfhkjajn jdjf jikfd k hahsdgygsd adahgsdja", rating: 4.5, genre: "Japnese", address: "123 pnt calony", short_address: "F12", dishes: [], long: 20, lat: 0, imageUri: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg" }} />
                ))}



            </ScrollView>
        </View >
    )
}

export default FeaturedRow