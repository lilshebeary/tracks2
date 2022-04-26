import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';
import { NavigationContext, NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  console.log(state);

  return (
    <>
    <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.text}>Track List Screen</Text>
     <FlatList 
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )
        }}
     
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