import { View, Text } from "react-native";
import React from "react";
import GreetComp from "@/components/GreetComp";

export default function Landing() {
  return (
    <View>
      <Text>Landing</Text>
      <View>
        <GreetComp />
      </View>
    </View>
  );
}
