
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/home/Categories'
import FeaturedRow from '../components/home/FeaturedRow'
const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
    return (
        <SafeAreaView className="bg-white pt-5 " >
            <View className="px-2">
                <View className="flex-row items-center space-x-2 pb-3">
                    <Image source={{ uri: "https://links.papareact.com/wru" }} className="w-7 h-7 rounded-full bg-gray-300 p-4 "></Image>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliveroo Now</Text>
                        <View className=" flex-row items-center">
                            <Text className="text-xl font-bold">Current Location</Text>
                            <ChevronDownIcon size={20} color={"#00CCBB"} />
                        </View>
                    </View>
                    <UserIcon size={35} color={"#00CCBB"}></UserIcon>
                </View>
                <View className="flex-row items-center space-x-2 pb-2">
                    <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 w-full p-3 rounded">
                        <MagnifyingGlassIcon color={"#00CCBB"} size={20} ></MagnifyingGlassIcon>
                        <TextInput placeholder='Resurent and cusien' keyboardType='default'></TextInput>
                    </View>
                    <AdjustmentsVerticalIcon color={"#00CCBB"}  ></AdjustmentsVerticalIcon>
                </View>
            </View>

            <ScrollView className="bg-gray-100" contentContainerStyle={{
                paddingBottom: 150,
            }}>
                <Categories />

                <FeaturedRow
                    title="Offer near you"
                    description="paid placement for you patners"
                    category="featured"
                />
                <FeaturedRow
                    title="Feature"
                    description="paid placement for you patners"
                    category="featured"
                />
                <FeaturedRow
                    title="Tasty Discounts"
                    description="paid placement for you patners"
                    category="featured"
                />

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen