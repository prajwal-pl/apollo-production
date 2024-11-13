import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#C67C4E",
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
        name="home"
      />
      <Tabs.Screen
        options={{
          headerShown: true,
          title: "Order",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={24} color={color} />
          ),
        }}
        name="order"
      />
      <Tabs.Screen
        options={{
          headerShown: true,
          title: "Chat Bot",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="robot" size={24} color={color} />
          ),
        }}
        name="chatRoom"
      />
    </Tabs>
  );
};

export default RootLayout;
