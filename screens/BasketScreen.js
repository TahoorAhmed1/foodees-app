import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 bg-white ">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className=" absolute right-5 top-2  bg-gray-100 rounded-full"
                >
                    <XCircleIcon color={"#00CCBB"} height={50} width={50}></XCircleIcon>
                </TouchableOpacity>
                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="w-7 h-7 rounded-full bg-gray-300 p-4 "
                    ></Image>
                    <Text className="flex-1">Deliver in 50-70 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="divide-y divide-gray-200">
                    <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text>3 x</Text>
                        <Image
                            source={{
                                uri: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg",
                            }}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">Sushi</Text>
                        <Text>PKR200</Text>
                        <TouchableOpacity>
                            <Text className="text-[#00CCBB] text-xs">remove</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text>3 x</Text>
                        <Image
                            source={{
                                uri: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg",
                            }}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">Sushi</Text>
                        <Text>PKR200</Text>
                        <TouchableOpacity>
                            <Text className="text-[#00CCBB] text-xs">remove</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-5">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">PKR 200</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400 ">PKR 200</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="">Order Total</Text>
                        <Text className="font-extrabold">PKR 300</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-3.5">
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;
