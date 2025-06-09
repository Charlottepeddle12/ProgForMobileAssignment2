import { Text, View, Button, Pressable } from "react-native";
import { useState } from "react"
import TvShows from "../components/TvShows.jsx"
import tvShowData from "../assets/tvShows.json"

export default function Index() {
  const  [index, setIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
     <TvShows tvShowData={tvShowData[index]}/>
     <Pressable onPress={()=>{setIndex(0)}}>
        <Button title="1"/>
     </Pressable>
     <Pressable onPress={()=>{setIndex(1)}}>
         <Button title="2"/>
    </Pressable>
    <Pressable onPress={()=>{setIndex(2)}}>
        <Button title="3"/>
     </Pressable>

    </View>
  );
}
