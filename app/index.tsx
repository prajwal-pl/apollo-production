/// <reference types="nativewind/types" />
import { Text, View, SafeAreaView, ImageBackground } from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { router } from "expo-router";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="w-full h-full">
        <ImageBackground
          className="w-full h-full items-center"
          source={require("../assets/images/index_bg_image.png")}
        >
          <View className="flex h-[60%]" />
          <View className="flex w-[80%] items-center self-center">
            <Text className="text-white text-4xl text-center font-[Sora-SemiBold] ">
              Fall in Love with Coffee in Blissful Delight!
            </Text>

            <Text className="pt-3 text-[#A2A2A2] text-center font-[Sora-Regular]">
              Welcome to our cozy coffee corner, where every cup is a delightful
              one for you.
            </Text>
            <TouchableOpacity
              className="bg-orange-600  mt-10 p-3 rounded-lg "
              style={{
                backgroundColor: "#C57C3E",
                width: 400,
                justifyContent: "center",
                marginTop: 40,
                padding: 12,
                borderRadius: 8,
                alignItems: "center",
              }}
              onPress={() => router.push("/(tabs)/home")}
            >
              <Text className="text-xl text-center w-full text-white font-[Sora-SemiBold]">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
