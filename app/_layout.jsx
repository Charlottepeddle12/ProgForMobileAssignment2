import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
      <Tabs>
          <Tabs.Screen name="index"
          options={{
              title: "Home",
              tabBarIcon: ({color}) => <MaterialIcons size={28} name="home"  color={color} />
                  }}
              />

          <Tabs.Screen name="tvShows"
                    options={{
                        title: "Tv shows",
                        tabBarIcon: ({color}) => <MaterialIcons size={28} name="movie"  color={color} />
                            }}
                        />
      </Tabs>
      )

}
