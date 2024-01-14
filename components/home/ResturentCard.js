import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const ResturentCard = ({ data }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant", data)} className=" w-64 mr-3 bg-white shadow rounded-sm ">
            <Image source={{ uri: data.imageUri }}
                className="h-36 w-full rounded-sm "></Image>

            <View className=" gap-y-1 px-2 pb-4 pt-2">

                <Text className="font-bold text-lg ">{data.title}</Text>
                <View className="flex-row items-center gap-x-1">
                    <StarIcon color={"green"} opacity={0.5} size={22}></StarIcon>
                    <Text className="text-xs">{data.rating} . {data.genre}</Text>
                </View>
                <View className="flex-row items-center gap-x-1">
                    <MapPinIcon color={"gray"} opacity={0.5} size={22}></MapPinIcon>
                    <Text className="text-xs text-gray-500">Nearby . {data.address}</Text>
                </View>
            </View>




        </TouchableOpacity>
    )
}

export default ResturentCard