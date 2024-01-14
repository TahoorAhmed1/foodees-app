import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ data }) => {
    return (
        <TouchableOpacity className="relative  mr-2">
            <Image source={{ uri: data.imageUri }} className="w-20 h-20 rounded bg-slate-500"></Image>

            <Text className={"absolute bottom-1 text-white font-bold left-1"}>{data.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard