import React from "react";
import Spacer from "./Spacer";
import { Input, Button } from "react-native-elements";

const TrackForm = () => {
  return (
    <>
      <Spacer />
      <Spacer>
        <Input placeholder="Enter Track Name"/>
      </Spacer>

      <Spacer />

      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;
 