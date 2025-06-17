import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {TvShowContext} from '../components/TvShowContext'
import { useState } from 'react';
import tvShowObject from "../assets/tvShows.json";

export default function RootLayout() {
  const [tvShowData, setTvShowData] = useState(tvShowObject);

  return (
      <TvShowContext.Provider value={{tvShowData, setTvShowData}}>
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
              <Tabs.Screen name="updateTvShows"
                                      options={{
                                          title: "Update tv shows",
                                          tabBarIcon: ({color}) => <MaterialIcons size={28} name="movie"  color={color} />
                                              }}
                                          />
          </Tabs>
      </TvShowContext.Provider>
      )
}
