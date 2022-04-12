import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always'}}>
      <Spacer>
        <View style={styles.container}>
          <Text style={styles.text}>Account Screen</Text>
          <Spacer>
            <Button title="Sign Out" onPress={signout} />
          </Spacer>
        </View>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 10,
  
  },
  text: {
    fontSize: 38,
    alignSelf: 'center',
    marginBottom: 10
  },
});

export default AccountScreen;
