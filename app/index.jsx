import { Text, View, Button, Image, StyleSheet } from "react-native";
import {useRouter} from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>

     <Text>Hi this is a test</Text>
     <Button onPress={() => router.navigate('/tvShows')} title="Tv shows"></Button>
    </View>
  );
}
