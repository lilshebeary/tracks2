import React, { useContext } from "react";
import Spacer from "./Spacer";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { state: { name, recording, locations }, 
    startRecording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext);

  console.log(locations.length)

  return (
    <>
      <Spacer />
      <Spacer>
        <Input 
          value={name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>

      <Spacer />
    {recording ? 
    (
      <Button title="Stop" onPress={stopRecording} /> 
    ) : (
     <Button title="Start Recording" onPress={startRecording} /> 
     )}
    </>
  );
};

export default TrackForm;
 