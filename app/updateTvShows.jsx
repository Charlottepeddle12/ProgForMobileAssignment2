import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext} from 'react';
import { TvShowContext } from '../components/TvShowContext';
import {Picker} from '@react-native-picker/picker';

export default function UpdateTvShows() {

    const [currentTvShow, setCurrentTvShow] = useState(0)
    const { tvShowData, setTvShowData } = useContext(TvShowContext);
    const [title, setTitle] = useState(tvShowData[currentTvShow].title);
    const [genres, setGenres] = useState(tvShowData[currentTvShow].genres);
    const [yearsAired, setYearsAired] = useState(tvShowData[currentTvShow].yearsAired);
    const [summary, setSummary] = useState(tvShowData[currentTvShow].summary);
    const [poster, setPoster] = useState(tvShowData[currentTvShow].image)

    const changeGenres = (value) => {
        const updatedArray = value.split(',');
        setGenres(updatedArray)
    }

    const updateTvShowData = () => {

        const updatedData = {
           title: title,
           genres: genres,
           yearsAired: yearsAired,
           summary: summary,
           image : poster
        }
        tvShowData[currentTvShow] = updatedData
        setTvShowData(tvShowData)
    }

    const changeTvShowIndex = (value) => {
        const index = parseInt(value);
        setTitle(tvShowData[index].title);
        setGenres(tvShowData[index].genres);
        setYearsAired(tvShowData[index].yearsAired);
        setSummary(tvShowData[index].summary);
        setPoster(tvShowData[index].image)
        setCurrentTvShow(index);
    }

    return (
        <>
            <Text>Tv show Index</Text>
             <Picker
                  selectedValue={currentTvShow}
                  onValueChange={(itemValue, itemIndex) =>
                    changeTvShowIndex(itemIndex)
                  }>
                  <Picker.Item label="Tv show 1" value="tv1" />
                  <Picker.Item label="Tv show 2" value="tv2" />
                  <Picker.Item label="Tv show 3" value="tv3" />
                </Picker>

            <Text>Change poster</Text>

            //TODO: FIX SO YOU CAN SELECT A POSTER. LOOK AT https://github.com/EricStockTeacher/EricsMovies/commit/96c6d11963dfea5293966256ff68736c08eb52f7
             <Picker
                  selectedValue={poster}
                  onValueChange={(itemValue, itemIndex) =>
                    setPoster(itemValue)
                  }>
                  <Picker.Item label="Stranger Things Season 1 poster" value="StrangerThingsImg1" />
                  <Picker.Item label="Stranger Things Season 4 poster" value="StrangerThingsImg2" />
                  <Picker.Item label="The Office poster 1" value="OfficeImg1" />
                  <Picker.item label="The Office poster 2" value="OfficeImg2"/>
                  <Picker.item label="Bojack Horseman poster 1" value="BojackImg1"/>
                  <Picker.item label="Bojack Horseman poster 2" value="BojackImg2"/>
            </Picker>

            <Text>Title</Text>
            <TextInput value={title.toString()} onChangeText={setTitle}/>

            <Text>Genres</Text>
            <TextInput value={genres.toString()} onChangeText={changeGenres} />

            <Text>Years aired</Text>
            <TextInput value={yearsAired.toString()} onChangeText={setYearsAired}/>

            <Text>Summary</Text>
            <TextInput value={summary.toString()} onChangeText={setSummary}/>

            <Button title="Update" onPress={updateTvShowData} />

        </>

    )
}