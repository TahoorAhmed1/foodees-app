import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = ({ navigation }) => {
    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color={"white"} size={30}></XMarkIcon>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimate Arrival</Text>
                            <Text className="text-4xl">45-50 Minutes</Text>
                        </View>
                        <Image
                            source={{ uri: "https://links.papareact.com/fls" }}
                            className="h-20 w-20"
                        ></Image>
                    </View>

                    <Progress.Bar
                        size={30}
                        indeterminate={true}
                        color="#00CCBB"
                    ></Progress.Bar>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: 24.860735,
                    longitude: 67.001137,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
                className="flex-1 -mt-10 Z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 24.860735,
                        longitude: 67.001137,
                    }}
                    title="Sushi"
                    description="gadgas dasdgyajd sgagda dagdga"
                    identifier="origin"
                    pinColor="#00CCBB"
                ></Marker>
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="bg-gray-300 p-4 rounded-full h-12 w-12 ml-5"
                ></Image>
                <View className="flex-1">
                    <Text className="text-lg">Tahoor Ahmed</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    );
};

export default DeliveryScreen;
