import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContext } from 'react-navigation'

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button 
        title='Go to track detail'
        onPress={() => navigation.navigate('TrackDetail')} 
      />
    </>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({
  text: {
    fontSize: 48
  }
})