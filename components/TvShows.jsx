import { Text, View, Image, StyleSheet } from "react-native";

const styles ={
    imageSize:{
        width: 265,
        height: 350
        }
    }

export default function TvShows({tvShowData, image}){
    return (
            <>
                <Image source={image} style={styles.imageSize}/>
                <Text>Tile: {tvShowData.title}</Text>
                <Text>Summary: {tvShowData.summary}</Text>
                <Text>Aired: {tvShowData.yearsAired}</Text>
                {
                   tvShowData.genres.map((genre) => <Text key={genre}>{genre} </Text> )
                }
            </>
        )
    }