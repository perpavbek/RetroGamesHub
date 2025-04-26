import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapWidget({ markers }) {
  const [location, setLocation] = useState(null);
  const region = {
    latitude: markers[0]?.latitude || 51.165261,
    longitude: markers[0]?.longitude || 71.404350,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);
  
  if (!location) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            provider="google"
            region={region}
            showsUserLocation={true}
            zoomEnabled={true}
            scrollEnabled={true}
            rotateEnabled={true}
        >
          {markers?.map(marker => (
            <Marker
                key={marker.key}
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                }}
                title={marker.title || 'Marker'}
                description={marker.description || ''}
            />
            ))
          }
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 16/9,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
