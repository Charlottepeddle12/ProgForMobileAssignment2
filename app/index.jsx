import { Text, View, Button, Image, StyleSheet } from "react-native";
import { useState } from "react"
import TvShows from "../components/TvShows.jsx"
import tvShowData from "../assets/tvShows.json"

const StrangerThingsImage = require("../assets/images/StrangerThings.jpg");
const BojackImage = require("../assets/images/Bojack.jpg");
const OfficeImage = require("../assets/images/Office.jpg");

const images = [StrangerThingsImage, OfficeImage, BojackImage];

function GetButtons({index, setIndex}){
    if(index == 0){
        return (
            <>
                <Button title="1" color="blue" onPress={()=>{setIndex(0)}}/>
                <Button title="2" color="lightskyblue" onPress={()=>{setIndex(1)}}/>
                <Button title="3" color="lightskyblue" onPress={()=>{setIndex(2)}}/>
            </>
            )
        }
    else if(index == 1){
        return (
               <>
                   <Button title="1" color="lightskyblue" onPress={()=>{setIndex(0)}}/>
                   <Button title="2" color="blue" onPress={()=>{setIndex(1)}}/>
                   <Button title="3" color="lightskyblue" onPress={()=>{setIndex(2)}}/>
               </>
            )
        }
    else if(index == 2){
            return (
                   <>
                       <Button title="1" color="lightskyblue" onPress={()=>{setIndex(0)}}/>
                       <Button title="2" color="lightskyblue" onPress={()=>{setIndex(1)}}/>
                       <Button title="3" color="blue" onPress={()=>{setIndex(2)}}/>
                   </>
                )
            }
    }

export default function Index() {
  const  [index, setIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
     <TvShows tvShowData={tvShowData[index]} image={images[index]}/>
     <GetButtons index={index} setIndex={setIndex}/>
    </View>
  );
}
