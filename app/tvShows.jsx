import { Text, View, Button, Image, StyleSheet } from "react-native";
import { useState} from "react"
import { useContext} from "react"
import {useRouter} from "expo-router";
import TvShows from "../components/TvShow.jsx"
import {TvShowContext} from "../components/TvShowContext.jsx"

const StrangerThingsImage1 = require("../assets/images/StrangerThings.jpg");
const BojackImage1 = require("../assets/images/Bojack.jpg");
const OfficeImage1 = require("../assets/images/Office.jpg");
const StrangerThingsImage2 = require("../assets/images/StrangerThings4.jpg");
const BojackImage2 = require("../assets/images/Bojack2.jpg");
const OfficeImage2 = require("../assets/images/Office2.jpg");

const images = {"StrangerThingsImg1": StrangerThingsImage1, "OfficeImg1": OfficeImage1, "BojackImg1": BojackImage1, "StrangerThingsImg2": StrangerThingsImage2, "OfficeImg2": OfficeImage2, "BojackImg2": BojackImage2}

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
  const router = useRouter();
  const {tvShowData} = useContext(TvShowContext)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

    <TvShows tvShowData={tvShowData[index]} image={images[tvShowData[index].image]} />
     <GetButtons index={index} setIndex={setIndex}/>
    </View>
  );
}
