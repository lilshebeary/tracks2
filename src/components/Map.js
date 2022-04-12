import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'







const Map = () => {
    let points =[];
    for (let i = 0; i < 20; i++){
        if (i % 2 === 0) {
            points.push({
                latitude: 47.62210 + i * 0.001,
                longitude: -122.34994 + i * 0.001
            });
        } else {
            points.push({
                latitude: 47.62210 - i * 0.00001,
                longitude: -122.34994 + i * 0.002
            });
        }
        
    }

 
  return (
    <MapView  
        style={styles.map} 
        initialRegion={{
            latitude: 47.62210,
            longitude: -122.34994,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }

});

export default Map;