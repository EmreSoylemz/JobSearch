import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flext: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f23d45" },
          headerShadowVisible: true,
          headerTitle: "hello world",
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} />,
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
