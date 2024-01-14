import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import {
    ArrowLeftIcon,
    QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import {
    ChevronRightIcon,
    MapPinIcon,
    StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/restaurant/DishRow";
import BasketIcon from "../components/restaurant/BasketIcon";
const RestaurantScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });
    const { params } = useRoute();
    return (
        <>
            <BasketIcon></BasketIcon>
            <ScrollView>
                <View>
                    <Image
                        source={{ uri: params?.imageUri }}
                        className="w-full h-56 p-4 bg-slate-300 "
                    ></Image>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-14 left-5 p-2 bg-gray-200 rounded-full"
                    >
                        <ArrowLeftIcon size={20} color={"#00CCBB"}></ArrowLeftIcon>
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="p-4">
                        <Text className="text-3xl font-bold">{params?.title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color={"green"} opacity={0.5} size={22}></StarIcon>
                                <Text className="text-xs">
                                    {params?.rating} . {params?.genre}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color={"gray"} opacity={0.5} size={22}></MapPinIcon>
                                <Text className="text-xs text-gray-500">
                                    Nearby . {params?.address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2">
                            {params?.short_description}
                        </Text>
                    </View>
                    <TouchableOpacity className="flex-row items-center space-x-4 p-4 border-y border-gray-300">
                        <View className="flex-row items-center space-x-4 flex-1">
                            <QuestionMarkCircleIcon
                                color={"gray"}
                                opacity={0.6}
                                size={20}
                            ></QuestionMarkCircleIcon>
                            <Text className="text-md font-bold">Have a food allergy ?</Text>
                        </View>
                        <ChevronRightIcon color={"#00CCBB"}></ChevronRightIcon>
                    </TouchableOpacity>
                </View>

                <View className="pb-32">
                    <Text className="px-4 py-4 font-bold text-xl">Menu</Text>
                    <DishRow></DishRow>
                    <DishRow></DishRow>
                    <DishRow></DishRow>
                    <DishRow></DishRow>
                </View>
            </ScrollView>
        </>

    );
};

export default RestaurantScreen;
