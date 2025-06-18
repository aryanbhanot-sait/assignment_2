import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet, Pressable, Linking, Text, Image, ScrollView } from "react-native";

const CalgaryScreen = () => {
  const handlePress = () => {
    Linking.openURL("https://www.calgary.ca/home.html");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Calgary</Text>
        <Image style={styles.image} source={require('../assets/calgary.jpg')} />
        <Text>Canada's Energy Hub: Calgary is the core of Canada's oil and gas sector, featuring a notable concentration of headquarters for energy companies. The World's Largest Outdoor Event: The city is famous for the Calgary Stampede, an annual rodeo, exhibition, and festival that attracts more than a million attendees every July. Gateway to the Rockies: Located under an hour's drive from the breathtaking Rocky Mountains, Calgary acts as a favored entry point for outdoor lovers traveling to Banff National Park and other beautiful mountain locations. Olympic Legacy: Calgary proudly claims the honor of being the first Canadian city to host the Winter Olympic Games, achieving this milestone in 1988.Chinook Winds: The city enjoys distinctive warm winter periods due to the 'Chinook' winds, which can quickly elevate temperatures by several degrees in a brief time. Bow River: The stunning Bow River winds through the city, providing picturesque trails, fishing spots, and chances for different water activities. Peace Bridge: A notable architectural structure, the Peace Bridge, crafted by Santiago Calatrava, is a unique red bridge for pedestrians and cyclists that crosses the Bow River.</Text>
        <Pressable onPress={handlePress}>
          <Text style={styles.b}>Go to City Calgary</Text>
        </Pressable>
        <Link href="/" asChild>
          <Pressable>
            <Text style={styles.b}>Back to Home</Text>
          </Pressable>
        </Link>
      </ScrollView>
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

export default CalgaryScreen;