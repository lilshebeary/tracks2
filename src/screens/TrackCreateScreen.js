import "../_mockLocation";
import React, {  useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation"; 
import TrackForm from "../components/TrackForm";
import { AntDesign } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
    addLocation(location, recording)
  }, [recording]);
  const [err] = useLocation(isFocused || recording, callback);

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

TrackCreateScreen.navigationOptions = () => {
  return {
    title: 'Add Track',
    tabBarIcon: <AntDesign name="plus" size={20} color="black" />
  };
};

const styles = StyleSheet.create({

});
 
export default withNavigationFocus(TrackCreateScreen);