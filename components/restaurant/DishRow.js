import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ data }) => {
    const [isPressed, setIsPressed] = useState(false)
    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`border ${isPressed && "border-b-0"} p-4 border-gray-200 bg-white`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{"Peri-Peri"}</Text>
                        <Text className="text-gray-500">
                            {
                                "hy gdsd g dhsgd hgd gds gs dbhdh ojn db bvdsg gsd gg dgd parife fd gfd dhhsdc "
                            }
                        </Text>
                        <Text className="text-gray-500 mt-2">
                            PKR {"2000"}
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"

                            }}
                            source={{
                                uri:
                                    data?.image ??
                                    "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg",
                            }}
                            className="h-20 w-20 bg-gray-300 p-4 "
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>
            {isPressed && <View className="p-4  bg-white">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity className="">
                        <MinusCircleIcon size={40} color={"#00CCBB"}></MinusCircleIcon>
                    </TouchableOpacity>
                    <TouchableOpacity className="">
                        <PlusCircleIcon size={40} color={"#00CCBB"}></PlusCircleIcon>

                    </TouchableOpacity>

                </View>
            </View>}
        </>

    );
};

export default DishRow;
