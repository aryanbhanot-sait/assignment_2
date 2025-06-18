import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Pressable, Linking, Text, Image, ScrollView } from "react-native";

export default function EdmontonScreen() {
  const handlePress = () => {
    Linking.openURL("https://www.edmonton.ca/");
  };

  return (
    <View>
      <ScrollView>

        <Text style={styles.title}>Edmonton</Text>
        <Image style={styles.image} source={require('../assets/edmonton.jpg')} />
        <Text>Edmonton is the capital city of Alberta, Canada. Frequently recognized as the 'Gateway to the North,' its key position acts as an essential center for reaching the extensive resources of Canada's northern areas. The city is home to the massive West Edmonton Mall, recognized as one of the largest shopping and entertainment centers in North America. Every year, Edmonton bursts with energy during the Edmonton International Fringe Theatre Festival, which proudly claims the title of the largest and longest-running fringe theatre festival in North America. Apart from its festivals, the city has a flourishing arts and culture scene, showcasing a variety of galleries, lively theaters, and an ongoing series of music events. Edmonton's grand River Valley Parks system constitutes the largest urban park area in North America, providing a vast green refuge for outdoor activities and nature discovery. Edmonton, the location of the renowned University of Alberta, serves as an important hub for education and research, drawing students and academics from all over the world.</Text>
        <Pressable onPress={handlePress}>
          <Text style={styles.b}>Go to City Edmonton</Text>
        </Pressable>
      </ScrollView>
      <Link href="/" asChild>
        <Pressable>
          <Text style={styles.b}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    marginTop: 40,
  },
  image: {
    width: "auto", borderRadius: 10, marginHorizontal: 40, marginVertical: 10, height: 400
  },
  b: { marginTop: 10, padding: 10, backgroundColor: 'blue', color: 'white', fontWeight: "bold" }
});