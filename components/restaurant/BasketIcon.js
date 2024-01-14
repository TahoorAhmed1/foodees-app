import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const navigation = useNavigation()

    return (
        <View className="absolute bottom-8 w-full z-10">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="bg-[#00CCBB] flex-row  items-center space-x-1 p-4 mx-4 rounded-lg justify-between">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2.5 rounded">0</Text>
                <Text className="text-white font-extrabold text-lg">View Basket</Text>
                <Text className="text-lg text-white font-bold">PKR 200</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon