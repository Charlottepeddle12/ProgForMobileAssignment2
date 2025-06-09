import { Text, View, Button } from "react-native";

export default function TvShows({tvShowData}){
    //ADD IMAGE IN PROPS
    return (
            <>
{/*             <image source={image}/> */}
                <Text>Tile: {tvShowData.title}</Text>
                <Text>Summary: {tvShowData.summary}</Text>
                <Text>Aired: {tvShowData.yearsAired}</Text>
                {
                   tvShowData.genres.map( (genre) => <Text key={genres}>{genre} </Text> )
                }
            </>
        )
    }