import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useEffect } from "react";
const PreparingOrderScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")

        }, 3000)
    }, [])
    return (
        <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/image/deliveroo.gif")}
                animation={"slideInUp"}
                iterationCount={1}
                className="w-96 h-96"
            ></Animatable.Image>
            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg my-10 font-bold text-center text-white"
            >
                Waiting for Restaurant to accept your order
            </Animatable.Text>
            <Progress.Circle
                size={60}
                borderWidth={1.5}
                indeterminate={true}
                color="white"
            >

            </Progress.Circle>
        </SafeAreaView>
    );
};

export default PreparingOrderScreen;
