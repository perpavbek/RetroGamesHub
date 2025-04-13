import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapWidget({ marker }) {
  const region = {
    latitude: marker?.latitude || 51.165261,
    longitude: marker?.longitude || 71.404350,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    marker && 
    <View style={styles.container}>
        <MapView
            style={styles.map}
            provider="google"
            region={region}
        >
            <Marker
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                }}
                title={marker.title || 'Marker'}
                description={marker.description || ''}
            />
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
