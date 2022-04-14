import "../_mockLocation";
import React, {  useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation"; 

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);
 
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h2>Create a Track</Text>
      </Spacer>
      <Spacer>
        <Map />
      </Spacer>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});
 
export default TrackCreateScreen;