import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
const MapScreen = ({ route }) => {
  console.log("route.params.location", route.params.location);
  // const { longitude, latitude } = route.params.location;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.4591,
          longitude: 30.4903,
          // longitude,
          // latitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 50.4591, longitude: 30.4903 }}
          // coordinate={{ latitude, longitude }}
          title="work"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default MapScreen;
