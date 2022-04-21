import "../_mockLocation";
import React, {  useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation"; 
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h2>Create a Track</Text>
      </Spacer>
      <Spacer>
        <Map />
        
      </Spacer>
      {err ? <Text>Please enable location services</Text> : null}
     
      <TrackForm />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});
 
export default withNavigationFocus(TrackCreateScreen);